import { useState } from "react";
import "../Styles/MusicButton.css";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);

    // later you will control audio here
  };

  return (
    <button className="music-btn" onClick={toggleMusic}>
      <img
        src={isPlaying ? "/audio-on.png" : "/audio-off.png"}
        alt="music toggle"
        className="music-icon"
      />
    </button>
  );
}