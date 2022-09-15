import React, { useState } from 'react'

function TrackList({ track, setPlayMe }) {
  const [toggle, setToggle] = useState(false)

  function handleAdd() {
    const songData = {
      id: track.id,
      track: track.name,
      uri: track.uri,
      album: track.album.name,
      image: track.album.images[0].url,
      album_uri: track.album.uri,
      artist: track.artists[0].name,
      artist_id: track.artists[0].id,
      artist_uri: track.artists[0].uri,
      like: false,
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
    <li className="music-list-item">
      <img className="tracklist-image" height="100px" onClick={playIt} src={track.album.images[0].url} />
      <span className="music-list-span">  {track.name} - {track.artists[0].name}</span>
      <span>
      <button className="music-button1" onClick={handleAdd}>Add Song</button>
      <button className="music-button2" onClick={onListen}>Listen</button>
      </span>
    </li>
  )
}

export default TrackList
