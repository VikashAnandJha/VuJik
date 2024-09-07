import React, { useEffect } from "react";

function Playlist({ changeSong }) {
  // Sample playlist data
  const songs = [
    {
      name: "tauba tauba",
      url: "https://djjohal.com.in/songs/128/Hindi/4161/Tauba%20Tauba%20-%20Djjohal.fm.mp3",
    },
    {
      name: "Antidote",
      url: "https://djjohal.com.in/songs/128/Punjabi/4049/Antidote%20-%20Djjohal.fm.mp3",
    },
    {
      name: "Admiring you",
      url: "https://pagalworld.cool/files/download/id/315",
    },
  ];

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
