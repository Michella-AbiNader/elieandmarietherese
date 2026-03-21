import SectionWrapper from "../Layout/SectionWrapper";
import { invitationConfig } from "../Config";
import "../Styles/Section2.css";

export default function Section2() {
  return (
    <SectionWrapper>
      <div className="content animate">

        <h2 className="title">
          دعوة لحضور حفل زفاف
        </h2>

        <p className="invitation-text">
         {invitationConfig.invitationText}
        </p>

        <p className="date">
          {invitationConfig.weddingDate_String}
        </p>

      </div>
    </SectionWrapper>
  );
}