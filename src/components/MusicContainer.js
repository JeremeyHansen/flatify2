import React, { useState } from 'react';


function MusicContainer({ artist, token, sendTracks, setShow }){

    function handleSongs() {
        setShow("hide");
        fetch(`https://api.spotify.com/v1/search?q=${artist.name}&type=track&limit=50`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        })
          .then(res => res.json())
          .then(data => sendTracks(data.tracks.items));
    }

    return (
    <div className="music-card">
        <ul>
           <h2>{artist.name}</h2>
           <img className="artist-img" height="140" src={artist.images.length > 0 ? artist.images[0].url : null} />
        </ul>
        <button className="get-songs-button" onClick={handleSongs}>Get Songs</button>
    </div>
    )
};

export default MusicContainer;