import React, { useEffect, useState } from 'react'
import MusicContainer from './MusicContainer'
import TrackList from './TrackList'
import Typewriter from 'typewriter-effect'

export default function Music({ token, setPlayMe }) {
  const [searchKey, setSearchKey] = useState('')
  const [artists, setArtists] = useState([])
  const [handleTracks, setHandleTracks] = useState([])

  useEffect(() => {
    if (searchKey !== '') {
      fetch(
        `https://api.spotify.com/v1/search?q=${searchKey}&type=artist&include_external=audio&limit=5`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((res) => res.json())
        .then((data) => setArtists(data.artists.items))
    }
  }, [searchKey])

  function handleInput(e) {
    setSearchKey(e.target.value)
  }

  return (
    <div className="music-container">
      <div className="music-typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Music').start()
          }}
        />
      </div>

      {token ? (
        <div className="form-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="input-form"
              placeholder="Search Artist"
              onInput={handleInput}
            />
          </form>
        </div>
      ) : (
        <h2>Please login</h2>
      )}

      <div className="contain">
        <div className="left">
          <div>Artist</div>
          {artists.map((artist) => (
            <MusicContainer
              key={artist.id}
              artist={artist}
              token={token}
              sendTracks={setHandleTracks}
            />
          ))}
        </div>
        <div className="right">
          <div className="contain">
            <span>Songs</span>
            <span className="right-align">Album</span>
          </div>
          {handleTracks.map((track) => (
            <TrackList key={track.id} track={track} setPlayMe={setPlayMe} />
          ))}
        </div>
      </div>
    </div>
  )
}
