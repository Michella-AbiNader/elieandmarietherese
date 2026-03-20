import SectionWrapper from "../Layout/SectionWrapper";
import { invitationConfig } from "../Config";
import useCountdown from "../Hooks/useCountdown";
import "../Styles/Section1.css";

export default function Section1() {
  const timeLeft = useCountdown(invitationConfig.weddingDate);

  return (
    <SectionWrapper>
      <div className="content">

        <h1 className="names">{invitationConfig.coupleNames}</h1>

        <p className="quote">{invitationConfig.quote}</p>

        {timeLeft && (
  <div className="countdown">
    <div className="time-box">
      <span className="number">{timeLeft.days}</span>
      <span className="label">يوم</span>
    </div>

    <div className="time-box">
      <span className="number">{timeLeft.hours}</span>
      <span className="label">ساعة</span>
    </div>

    <div className="time-box">
      <span className="number">{timeLeft.minutes}</span>
      <span className="label">دقيقة</span>
    </div>

    <div className="time-box">
      <span className="number">{timeLeft.seconds}</span>
      <span className="label">ثانية</span>
    </div>
  </div>
)}

        <div className="swipe-hint">
           <img src={"/swipe-right.png"}  lt="swipe right" className="swipe-icon" /> 
           <span>اسحب لليمين  </span>
        </div>

      </div>
    </SectionWrapper>
  );
}