import SectionWrapper from "../Layout/SectionWrapper";
import { invitationConfig } from "../Config";
import "../Styles/RSVP.css";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function RSVP() {
  const { rsvp } = invitationConfig;

  // Multiple names
  const [names, setNames] = useState([""]);
  const [attending, setAttending] = useState("");

  // Update name
  const handleNameChange = (index, value) => {
    const updated = [...names];
    updated[index] = value;
    setNames(updated);
  };

  // Add guest
  const addGuest = () => {
    setNames([...names, ""]);
  };

  // Remove guest
  const removeGuest = (index) => {
    const updated = names.filter((_, i) => i !== index);
    setNames(updated);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const filteredNames = names.filter((n) => n.trim() !== "");

    // Validation
    if (filteredNames.length === 0) {
      alert("يرجى إدخال اسم واحد على الأقل");
      return;
    }

    if (!attending) {
      alert("يرجى اختيار الحضور أو عدم الحضور");
      return;
    }

    try {
      await addDoc(collection(db, "rsvpsTest"), {
        names: filteredNames,
        attending: attending,
        createdAt: serverTimestamp(),
      });

      alert("تم إرسال الرد بنجاح ❤️");

      // Reset form
      setNames([""]);
      setAttending("");

    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء الإرسال");
    }
  };

  return (
    <SectionWrapper>
      <div className="content">

        <h2 className="title">{rsvp.title}</h2>

        <p className="deadline">{rsvp.deadline}</p>

        <form className="rsvp-form" onSubmit={handleSubmit}>

          {/* Names list */}
          {names.map((name, index) => (
            <div key={index} className="guest-input">

              <input
                type="text"
                placeholder={
                  index === 0
                    ? rsvp.namePlaceholder
                    : `اسم المرافق ${index}`
                }
                value={name}
                onChange={(e) =>
                  handleNameChange(index, e.target.value)
                }
                className="input"
              />

              {/* Remove button (not for first input) */}
              {index > 0 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeGuest(index)}
                >
                  ✕
                </button>
              )}

            </div>
          ))}

         
          {/* Radio buttons */}
          <div className="radio-group">

            <label>
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={attending === "yes"}
                onChange={() => setAttending("yes")}
              />
              {rsvp.attendingYes}
            </label>

            <label>
              <input
                type="radio"
                name="attending"
                value="no"
                checked={attending === "no"}
                onChange={() => setAttending("no")}
              />
              {rsvp.attendingNo}
            </label>

          </div>

       <div className="buttons-row">

      {/* Add guest */}
      <button
        type="button"
        className="add-guest-btn"
        onClick={addGuest}
      >
        + إضافة مرافق
      </button>

      {/* Submit */}
      <button type="submit" className="submit-btn">
        {rsvp.submitText}
      </button>

    </div>

        </form>

      </div>
    </SectionWrapper>
  );
}
// import SectionWrapper from "../Layout/SectionWrapper";
// import { invitationConfig } from "../Config";
// import "../Styles/RSVP.css";
// import { useState } from "react";
// import { db } from "../firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// export default function RSVP() {
//   const { rsvp } = invitationConfig;

//   const [name, setName] = useState("");
//   const [attending, setAttending] = useState("");

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!name || !attending) {
//     alert("يرجى تعبئة جميع الحقول");
//     return;
//   }

//   try {
//     await addDoc(collection(db, "rsvpsTest"), {
//       name: name,
//       attending: attending,
//       createdAt: serverTimestamp(),
//     });

//     alert("تم إرسال الرد بنجاح ❤️");

//     // reset form
//     setName("");
//     setAttending("");
//   } catch (error) {
//     console.error(error);
//     alert("حدث خطأ أثناء الإرسال");
//   }
// };

//   return (
//     <SectionWrapper>
//       <div className="content">

//         <h2 className="title">{rsvp.title}</h2>

//         <p className="deadline">{rsvp.deadline}</p>

//         <form className="rsvp-form" onSubmit={handleSubmit}>

//           {/* Name input */}
//           <input
//             type="text"
//             placeholder={rsvp.namePlaceholder}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="input"
//           />

//           {/* Radio buttons */}
//           <div className="radio-group">

//             <label>
//               <input
//                 type="radio"
//                 name="attending"
//                 value="yes"
//                 onChange={() => setAttending("yes")}
//               />
//               {rsvp.attendingYes}
//             </label>

//             <label>
//               <input
//                 type="radio"
//                 name="attending"
//                 value="no"
//                 onChange={() => setAttending("no")}
//               />
//               {rsvp.attendingNo}
//             </label>

//           </div>

//           {/* Submit */}
//           <button type="submit" className="submit-btn">
//             {rsvp.submitText}
//           </button>

//         </form>

//       </div>
//     </SectionWrapper>
//   );
// }