import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "../Styles/AdminDashboard.css";

export default function AdminDashboard() {
  const [rsvps, setRsvps] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "rsvpsTest"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
        console.log(data)
      setRsvps(data);
      setFiltered(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let data = [...rsvps];

    if (filter !== "all") {
      data = data.filter(r => r.attending === filter);
    }

    if (search.trim() !== "") {
      data = data.filter(r =>
        (Array.isArray(r.names) ? r.names : [r.name || ""])
          .some(name =>
            name.toLowerCase().includes(search.toLowerCase())
          )
      );
    }

    setFiltered(data);
  }, [search, filter, rsvps]);

  const totalGuests = filtered.reduce((sum, r) => {
    return sum + (Array.isArray(r.names) ? r.names.length : (r.name ? 1 : 0));
  }, 0);

  const totalInvites = filtered.length;

 // const attendingCount = filtered.filter(r => r.attending === "yes").length;
 const attendingCount = filtered
  .filter(r => r.attending === "yes")
  .reduce((sum, r) => sum + (Array.isArray(r.names) ? r.names.length : 1), 0);
  //const notAttendingCount = filtered.filter(r => r.attending === "no").length;
  const notAttendingCount = filtered
  .filter(r => r.attending === "no")
  .reduce((sum, r) => sum + (Array.isArray(r.names) ? r.names.length : 1), 0);

  const exportToExcel = () => {
    const data = filtered.map(r => ({
      Names: Array.isArray(r.names) ? r.names.join(", ") : r.name,
      Attending: r.attending === "yes" ? "Yes" : "No",
      Guests: Array.isArray(r.names) ? r.names.length : 1
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "RSVPs");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array"
    });

    const file = new Blob([excelBuffer], {
      type: "application/octet-stream"
    });

    saveAs(file, "Wedding_RSVPs.xlsx");
  };

  return (
    <div className="dashboard">

      <h1 className="dashboard-title">Wedding Dashboard</h1>

      {/* 🔹 STATS */}
      <div className="stats">

        <div className="card">
          <h3>Total Responses</h3>
          <p>{totalInvites}</p>
        </div>

        <div className="card">
          <h3>Total Guests</h3>
          <p>{totalGuests}</p>
        </div>

        <div className="card">
          <h3>Attending</h3>
          <p>{attendingCount}</p>
        </div>

        <div className="card">
          <h3>Not Attending</h3>
          <p>{notAttendingCount}</p>
        </div>

      </div>

      {/* 🔹 CONTROLS */}
      <div className="controls">

        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="yes">Attending</option>
          <option value="no">Not Attending</option>
        </select>

        <button onClick={exportToExcel}>
          Export Excel
        </button>

      </div>

      {/* 🔹 TABLE */}
      <div className="table-container">
        <table>

          <thead>
            <tr>
              <th>Names</th>
              <th>Status</th>
              <th>Guests</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((rsvp) => (
              <tr key={rsvp.id}>
                <td>
                  {Array.isArray(rsvp.names)
                    ? rsvp.names.join(", ")
                    : rsvp.name}
                </td>

                <td>
                  {rsvp.attending === "yes"
                    ? <span className="yes">Yes</span>
                    : <span className="no">No</span>}
                </td>

                <td>
                  {Array.isArray(rsvp.names)
                    ? rsvp.names.length
                    : 1}
                </td>
                  <td>
                    {rsvp.createdAt
                    ? rsvp.createdAt.toDate().toLocaleString()
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}