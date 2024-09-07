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
    {
      name: "jee ni krda",
      url: "https://p320.djpunjab.is/data/48/54172/302537/Jee%20Ni%20Lagda%20-%20Karan%20Aujla.mp3",
    },
    {
      name: "Assi gabru punjabi",
      url: "https://music.djpunjab.com.se/upload_file/414/415/176/400/407/Asi_Gabru_Punjabi_Amrinder_Gill.mp3",
    },
    {
      name: "bol kaffara",
      url: "https://pagalfree.com/musics/128-Bol%20Kaffara%20Kya%20Hoga%20-%20Neha%20Kakkar%20128%20Kbps.mp3",
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
