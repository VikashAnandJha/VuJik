import React, { useEffect, useState } from "react";
import localsongs from "./songs.json";
function Playlist({ changeSong }) {
  const [songs, setSongs] = useState(localsongs);

  useEffect(() => {
    // URL of the JSON data
    const url =
      "https://raw.githubusercontent.com/VikashAnandJha/VuJik/main/src/songs.json";

    fetch(url)
      .then((response) => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        // Parse the JSON data
        return response.json();
      })
      .then((data) => {
        setSongs(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
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
