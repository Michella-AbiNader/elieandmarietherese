import { useRef, useState, useEffect } from "react";
import Section1 from "./Sections/Section1";
import MusicButton from "./Layout/MusicButton";
import Envelope from "./Components/Envelope";
import SwipeContainer from "./Components/SwipeContainer";
import Section2 from "./Sections/Section2";

function App() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const sections = [
  <Section1 key="1" />,
  <Section2 key="2" />,
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
    <div style={{ position: "relative" }}>
      {/* 🎶 Audio */}
      <audio ref={audioRef} src="/InvitationMusic.mp3" loop />

      {/* 🎉 ALWAYS visible in background */}
      <SwipeContainer sections={sections} isEnabled={isOpened} />

      <MusicButton
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
      />

      {/* 📩 Overlay envelope */}
      {!isOpened && (
        <Envelope onOpen={() => setIsOpened(true)} />
      )}
    </div>
  );
}

export default App;
// import { useRef, useState, useEffect } from "react";
// import Section1 from "./Sections/Section1";
// import MusicButton from "./Layout/MusicButton";

// function App() {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Try to autoplay (may be blocked until user interaction)
//   useEffect(() => {
//     const playAudio = async () => {
//       try {
//         await audioRef.current.play();
//         setIsPlaying(true);
//       } catch {
//         setIsPlaying(false);
//       }
//     };

//     playAudio();
//   }, []);

//   const toggleMusic = () => {
//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <>
//       {/* Global Audio */}
//       <audio
//         ref={audioRef}
//         src="/InvitationMusic.mp3"
//         loop
//       />

//       <Section1 />

//       <MusicButton
//         isPlaying={isPlaying}
//         toggleMusic={toggleMusic}
//       />
//     </>
//   );
// }

// export default App;
// import "./App.css";
// import Section1 from "./Sections/Section1";
// import MusicButton from "./Layout/MusicButton";

// function App() {
//   return (
//     <>
//       <Section1 />
//       <MusicButton />
//     </>
//   );
// }

// export default App;
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
