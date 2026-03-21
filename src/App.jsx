import { useRef, useState, useEffect } from "react";
import Section1 from "./Sections/Section1";
import MusicButton from "./Layout/MusicButton";
import Envelope from "./Components/Envelope";
import SwipeContainer from "./Components/SwipeContainer";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";

function App() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const sections = [
  <Section1 key="1" />,
  <Section2 key="2" />,
    <Section3 key="3" />,

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
      backgroundImage: `url(/CoupleBGImage.jpeg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
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

    {/* 📩 Envelope */}
    {!isOpened && (
      <Envelope onOpen={() => setIsOpened(true)} />
    )}
  </div>
);
}

export default App;

// import { db } from "./firebase";
// import { collection, addDoc } from "firebase/firestore";

// function App() {
//   const testWrite = async () => {
//     try {
//       await addDoc(collection(db, "test"), {
//         message: "Hello from React!",
//         createdAt: new Date()
//       });
//       alert("Data sent successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("Error sending data!");
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Maro's Wedding 💍</h1>
//       <button onClick={testWrite}>Test Firebase</button>
//     </div>
//   );
// }
