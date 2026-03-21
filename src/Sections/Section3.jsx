import SectionWrapper from "../Layout/SectionWrapper";
import { invitationConfig } from "../Config";
import "../Styles/Section3.css";

export default function Section3() {
  const { ceremony, venue } = invitationConfig;

  return (
    <SectionWrapper>
      <div className="content3">

        {/* Ceremony */}
        <div className="block">
          <h2 className="title">{ceremony.title}</h2>
           <img src={"/church.png"} className="church-img"
      />
          <p className="details">
            {ceremony.name} - {ceremony.city}
          </p>

          <p className="time">{ceremony.time}</p>

          <a
            href={ceremony.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="location-btn"
          >
             موقع الإكليل
          </a>
        </div>

        {/* Venue */}
        <div className="block">
          <h2 className="title">{venue.title}</h2>

          <p className="details">
            {venue.name} - {venue.city}
          </p>

          <a
            href={venue.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="location-btn"
          >
            موقع حفل الاستقبال
          </a>
        </div>

      </div>
    </SectionWrapper>
  );
}