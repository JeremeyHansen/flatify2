import React, { useState } from 'react'

function TrackList({ track, setPlayMe }) {
  const [toggle, setToggle] = useState(false)
    function handleAdd() {
        const songData = {
            id: track.id,
            track: track.name,
            uri: track.uri,
            album: track.album.name,
            image: track.album.images[2].url,
            album_uri: track.album.uri,
            artist: track.artists[0].name,
            artist_id: track.artists[0].id,
            artist_uri: track.artists[0].uri,
            track_length: track.duration_ms,
            explicit: track.explicit,
            popularity: track.popularity,
            }
        
        fetch(`http://localhost:3001/artists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(songData),
        })
            .then(res => res.json())
            .then(updatedArtist => console.log(updatedArtist))
        setToggle(!toggle);
    }

    fetch(`http://localhost:3001/artists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(songData),
    })
      .then((res) => res.json())
      .then((updatedArtist) => console.log(updatedArtist))
    setToggle(!toggle)
  }

  function onListen() {
    setPlayMe(track.uri)
  }

  function playIt() {
    setPlayMe(track.uri)
  }

  return (
    <li>
      <img onClick={playIt} src={track.album.images[0].url} />
      {track.name}
      {track.artists[0].name}
      <button className="card-buttons" onClick={handleAdd} disabled={toggle ? true : false}>
        Add Song
      </button>
      <button className="card-buttons" onClick={onListen}>Listen</button>
    </li>
  )
}

export default TrackList
