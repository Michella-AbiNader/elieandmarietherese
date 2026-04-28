import { useState } from "react";
import { invitationConfig } from "../Config";
import "../Styles/Envelope.css";

export default function Envelope({ onOpen }) {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    if (isOpened) return;

    setIsOpened(true);

    setTimeout(() => {
      onOpen();
    }, 800); // match fade duration
  };

  return (
    <div
      className={`envelope-container ${isOpened ? "fade-out" : ""}`}
      onClick={handleClick}
      style={{
        backgroundColor: invitationConfig.backgroundColor,
        fontFamily: invitationConfig.fontFamily,
        color: invitationConfig.textColor,
      }}
    >
      {/* <img
        src="/closed-sealed-env.png" 
        alt="Envelope"
        className="envelope-image"
      /> */}
<picture style={{width:'100%',height:'100%'}}>
  <source media="(max-width: 768px)" srcSet="/closed-sealed-env-phone.jpg" />
  <img
    src="/closed-sealed-env.jpg"
    alt="Envelope"
    className="envelope-image"
  />
</picture>

      {!isOpened && (
        <p className="click-text">
          اضغط لفتح الدعوة
        </p>
      )}
    </div>
  );
}