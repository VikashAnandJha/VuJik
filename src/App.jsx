import { useState } from "react";
import "./App.css";
import Playlist from "./Playlist";
import { appWindow } from "@tauri-apps/api/window";
function App() {
  const [showPlayList, setshowPlayList] = useState(false);
  const [songUrl, setSongURl] = useState(
    "https://djjohal.com.in/songs/128/Punjabi/4049/Antidote%20-%20Djjohal.fm.mp3"
  );

  const changeSong = async (song) => {
    setSongURl(song.url);
    setshowPlayList(false);
    await appWindow.setTitle("🎵>" + song.name + " 👉 vujik");
  };
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "row", padding: 0 }}
    >
      {!showPlayList ? (
        <audio controls>
          <source src={songUrl} type="audio/mpeg" />
        </audio>
      ) : (
        <Playlist changeSong={changeSong} />
      )}
      <div>
        {" "}
        <button onClick={() => setshowPlayList(!showPlayList)}>--</button>
      </div>
    </div>
  );
}

export default App;
