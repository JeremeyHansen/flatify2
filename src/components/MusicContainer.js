import React, { useState } from 'react';


function MusicContainer({ artist, token, sendTracks }){

    function handleClick() {
        const artistData = {
            id: artist.id,
            name: artist.name,
            image: artist.images[0].url,
        }
        fetch("http://localhost:3001/artists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(artistData),
        })
            .then(res => res.json())
            .then(likedArtist => console.log(likedArtist))
    }

    function handleSongs() {
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
        <ul onClick={handleClick}>
           <h1>{artist.name}</h1>
           <img height="180" src={artist.images.length > 0 ? artist.images[0].url : null} />
        </ul>
        <button onClick={handleSongs}>Get Songs</button>
    </div>
    )
};

export default MusicContainer;