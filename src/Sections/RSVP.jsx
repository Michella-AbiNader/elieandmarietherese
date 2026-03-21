import SectionWrapper from "../Layout/SectionWrapper";
import { invitationConfig } from "../Config";
import "../Styles/RSVP.css";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function RSVP() {
  const { rsvp } = invitationConfig;

  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !attending) {
    alert("يرجى تعبئة جميع الحقول");
    return;
  }

  try {
    await addDoc(collection(db, "rsvpsTest"), {
      name: name,
      attending: attending,
      createdAt: serverTimestamp(),
    });

    alert("تم إرسال الرد بنجاح ❤️");

    // reset form
    setName("");
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

          {/* Name input */}
          <input
            type="text"
            placeholder={rsvp.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />

          {/* Radio buttons */}
          <div className="radio-group">

            <label>
              <input
                type="radio"
                name="attending"
                value="yes"
                onChange={() => setAttending("yes")}
              />
              {rsvp.attendingYes}
            </label>

            <label>
              <input
                type="radio"
                name="attending"
                value="no"
                onChange={() => setAttending("no")}
              />
              {rsvp.attendingNo}
            </label>

          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            {rsvp.submitText}
          </button>

        </form>

      </div>
    </SectionWrapper>
  );
}