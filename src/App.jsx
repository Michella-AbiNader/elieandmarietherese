import { Routes, Route } from "react-router-dom";
import InvitationApp from "./Components/Invitation";
import AdminDashboard from "./Components/AdminDashboard";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Invitation */}
      <Route path="/" element={<InvitationApp />} />

      {/* Dashboard */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
// import { useRef, useState, useEffect } from "react";
// import Invitation from "./Sections/Invitation";
// import MusicButton from "./Layout/MusicButton";
// import Envelope from "./Components/Envelope";
// import SwipeContainer from "./Components/SwipeContainer";
// import QuoteDate from "./Sections/QuoteDate";
// import WeddingVenue from "./Sections/WeddingVenue";
// import GiftRegistry from "./Sections/GiftRegistry";
// import RSVP from "./Sections/RSVP";

// function App() {
//   const audioRef = useRef(null);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isOpened, setIsOpened] = useState(false);

//   const sections = [
//   <Invitation key="1" />,
//   <QuoteDate key="2" />,
//   <WeddingVenue key="3" />,
//   <GiftRegistry key="4" />,
//   <RSVP key="5" />,

// ];

//   // Start music after user opens envelope
//   useEffect(() => {
//     if (isOpened && audioRef.current) {
//       audioRef.current.play();
//       setIsPlaying(true);
//     }
//   }, [isOpened]);

//   const toggleMusic = () => {
//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }

//     setIsPlaying(!isPlaying);
//   };
// return (
//   <div
//     style={{
//       position: "relative",
//       width: "100vw",
//       height: "100vh",
//       overflow: "hidden",
//       backgroundImage: `url(/CoupleBGImage.jpeg)`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}
//   >
//     <audio
//   ref={audioRef}
//   src="/InvitationMusic.mp3"
//   loop
//   preload="auto"
// />
//     {/*FIXED OVERLAY (ALWAYS THERE) */}
//     <div className="overlay" />

//     {/*SWIPE CONTENT */}
//     <div style={{ position: "relative", zIndex: 2 }}>
//       <SwipeContainer sections={sections} isEnabled={isOpened} />
//     </div>

//     {/* Music button */}
//     <MusicButton
//       isPlaying={isPlaying}
//       toggleMusic={toggleMusic}
//     />

//     {/* Envelope */}
//     {!isOpened && (
//       <Envelope onOpen={() => setIsOpened(true)} />
//     )}
//   </div>
// );
// }

// export default App;

// // import { db } from "./firebase";
// // import { collection, addDoc } from "firebase/firestore";

// // function App() {
// //   const testWrite = async () => {
// //     try {
// //       await addDoc(collection(db, "test"), {
// //         message: "Hello from React!",
// //         createdAt: new Date()
// //       });
// //       alert("Data sent successfully!");
// //     } catch (error) {
// //       console.error(error);
// //       alert("Error sending data!");
// //     }
// //   };

// //   return (
// //     <div style={{ padding: 20 }}>
// //       <h1>Maro's Wedding 💍</h1>
// //       <button onClick={testWrite}>Test Firebase</button>
// //     </div>
// //   );
// // }
