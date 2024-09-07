import React, { useEffect, useState } from "react";
import localsongs from "./songs.json";
function Playlist({ changeSong }) {
  const [songs, setSongs] = useState([]);

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
        height: 50,
        overflowY: "scroll",
        flexGrow: 1,
        textAlign: "left",
      }}
    >
      {songs.map((song, index) => (
        <div
          key={index}
          style={{
            borderBottom: "0.5px solid green",
            justifyContent: "left",
            padding: 3,
          }}
          className="hoverClass"
          onClick={async () => changeSong(song)}
        >
          <big>{song.name}</big>
        </div>
      ))}
    </div>
  );
}

export default Playlist;
