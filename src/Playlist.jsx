import React, { useEffect } from "react";
import songs from "./songs.json";
function Playlist({ changeSong }) {
  // Sample playlist data

  useEffect(() => {}, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        maxHeight: 30,
        overflowY: "scroll",
        border: 1,
        borderColor: "ActiveBorder",
      }}
    >
      {songs.map((song, index) => (
        <span key={index}>
          <strong onClick={async () => changeSong(song)}>{song.name}</strong>
        </span>
      ))}
    </div>
  );
}

export default Playlist;
