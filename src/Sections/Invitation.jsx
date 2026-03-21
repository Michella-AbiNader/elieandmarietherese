import SectionWrapper from "../Layout/SectionWrapper";
import { invitationConfig } from "../Config";
import "../Styles/Invitation.css";

export default function Invitation() {
  const section = invitationConfig.section1;

  return (
    <SectionWrapper>
      <div className="content animate">

        {/* Top Title */}
        {/* <h1 className="top-title">{section.title}</h1> */}

        {/* Parents names */}
        <div className="parents-names">
          <span className="groom-parent">{section.parents.groom}</span>
          <span className="bride-parent">{section.parents.bride}</span>
        </div>

        {/* Centered sentence */}
        <p className="sentence1">{section.sentence1}</p>

        {/* Optional small image */}
        {/* {section.smallImage && (
          <img src="/image-from-rawpixel-id-15797361-png.png" alt="decorative" className="small-image" />
        )} */}

        {/* Couple names with wedding ring */}
        <div className="couple-names">
          <span className="groom">{section.groomName}</span>
            <img src="/weddingRing.png" alt="ring" className="ring" />
          <span className="bride">{section.brideName}</span>
        </div>

        {/* Final centered sentence */}
        <p className="sentence2">{section.sentence2}</p>

        {/* Swipe hint */}
        <div className="swipe-hint">
          <img src="/swipe-right.png" alt="swipe right" className="swipe-icon" />
          <div><span>اسحب لليمين</span></div>
        </div>

      </div>
    </SectionWrapper>
  );
}
// import SectionWrapper from "../Layout/SectionWrapper";
// import { invitationConfig } from "../Config";
// import useCountdown from "../Hooks/useCountdown";
// import "../Styles/Section1.css";

// export default function Section1() {
//   //const timeLeft = useCountdown(invitationConfig.weddingDate);

//   return (
//     <SectionWrapper>
//       <div className="content animate">

//         <h1 className="names">{invitationConfig.coupleNames}</h1>

//         <p className="quote">{invitationConfig.quote}</p>

//         {/* {timeLeft && (
//   <div className="countdown">
//     <div className="time-box">
//       <span className="number">{timeLeft.days}</span>
//       <span className="label">يوم</span>
//     </div>

//     <div className="time-box">
//       <span className="number">{timeLeft.hours}</span>
//       <span className="label">ساعة</span>
//     </div>

//     <div className="time-box">
//       <span className="number">{timeLeft.minutes}</span>
//       <span className="label">دقيقة</span>
//     </div>

//     <div className="time-box">
//       <span className="number">{timeLeft.seconds}</span>
//       <span className="label">ثانية</span>
//     </div>
//   </div>
// )} */}

//         <div className="swipe-hint">
//            <img src={"/swipe-right.png"}  lt="swipe right" className="swipe-icon" /> 
//            <div><span>اسحب لليمين  </span></div>
//         </div>

//       </div>
//     </SectionWrapper>
//   );

// }