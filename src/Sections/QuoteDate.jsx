import SectionWrapper from "../Layout/SectionWrapper";
import { invitationConfig } from "../Config";
import "../Styles/QuoteDate.css";

export default function QuoteDate() {
  return (
    <SectionWrapper>
      <div className="content animate">

        {/* <h2 className="title">
          دعوة لحضور حفل زفاف
        </h2> */}

        <p className="invitation-text">
         {invitationConfig.quote}
        </p>

        <p className="date">
          {invitationConfig.weddingDate_String}
        </p>

      </div>
    </SectionWrapper>
  );
}