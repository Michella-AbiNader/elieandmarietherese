import SectionWrapper from "../Layout/SectionWrapper";
import { invitationConfig } from "../Config";
import "../Styles/GiftRegistry.css";
import { useState } from "react";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function GiftRegistry() {
  const { giftRegistry } = invitationConfig;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(giftRegistry.accountNumber)
      .then(() => {
        setCopied(true);
        alert(`تم النسخ: ${giftRegistry.accountNumber}`);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => alert("فشل النسخ"));
  };

  return (
    <SectionWrapper>
      <div className="content">

        <h2 className="title4">{giftRegistry.title}</h2>

        <p className="description">{giftRegistry.description}</p>

        {/* Account section */}
        <div className="account-container">
          <div className="account-label">{giftRegistry.accountLabel}</div>
          <div className="account-number-wrapper">
            <span className="account-number">{giftRegistry.accountNumber}</span>
            <button
              className="copy-btn"
              onClick={copyToClipboard}
              title="نسخ الرقم"
            >
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}