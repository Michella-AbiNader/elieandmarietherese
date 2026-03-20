// src/components/layout/SectionWrapper.jsx
import { invitationConfig } from "../Config";
import "../Styles/Section.css";

export default function SectionWrapper({ children }) {
  return (
    <div
      className="section"
      style={{
        backgroundImage: `url(/CoupleBGImage.svg)`,
      }}
    >
      <div className="overlay" />
      {children}
    </div>
  );
}