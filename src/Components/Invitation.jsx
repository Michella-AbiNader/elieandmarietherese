import { useRef, useState, useEffect } from "react";
import Invitation from "../Sections/Invitation";
import MusicButton from "../Layout/MusicButton";
import Envelope from "../Components/Envelope";
import SwipeContainer from "../Components/SwipeContainer";
import QuoteDate from "../Sections/QuoteDate";
import WeddingVenue from "../Sections/WeddingVenue";
import GiftRegistry from "../Sections/GiftRegistry";
import RSVP from "../Sections/RSVP";

function InvitationApp() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

//   const sections = [
//   <Invitation key="1" />,
//   <QuoteDate key="2" />,
//   <WeddingVenue key="3" />,
//   <GiftRegistry key="4" />,
//   <RSVP key="5" />,

// ];
const sections = [
  {
    component: <Invitation />,
    background: "/CoupleImage3.jpeg",
  },
  {
    component: <QuoteDate />,
    background: "/CoupleImage5.jpeg",
  },
  {
    component: <WeddingVenue />,
    background: "/CoupleImage6.jpeg",
  },
  {
    component: <GiftRegistry />,
    background: "/CoupleImage7.jpeg",
  },
  {
    component: <RSVP />,
    background: "/CoupleImage1.jpeg",
  },
];

  // Start music after user opens envelope
  useEffect(() => {
    if (isOpened && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpened]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };
return (
  <div
    style={{
      position: "relative",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      // backgroundImage: `url(/CoupleImage3.jpeg)`,
      // backgroundSize: "cover",
      // backgroundPosition: "center",
    }}
  >
    <audio
  ref={audioRef}
  src="/InvitationMusic.mp3"
  loop
  preload="auto"
/>
    {/*FIXED OVERLAY (ALWAYS THERE) */}
    <div className="overlay" />

    {/*SWIPE CONTENT */}
    <div style={{ position: "relative", zIndex: 2 }}>
      <SwipeContainer sections={sections} isEnabled={isOpened} />
    </div>

    {/* Music button */}
    <MusicButton
      isPlaying={isPlaying}
      toggleMusic={toggleMusic}
    />

    {/* Envelope */}
    {!isOpened && (
      <Envelope onOpen={() => setIsOpened(true)} />
    )}
  </div>
);
}

export default InvitationApp;

