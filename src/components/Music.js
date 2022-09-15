import React, { useEffect, useState } from 'react'
import MusicContainer from './MusicContainer'
import TrackList from './TrackList'
import Typewriter from 'typewriter-effect'

export default function Music({ token, setPlayMe }) {
  const [searchKey, setSearchKey] = useState('')
  const [artists, setArtists] = useState([])
  const [handleTracks, setHandleTracks] = useState([])
  const [show, setShow] = useState("show");

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
    setShow("show")
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
        <div className={show === "show" ? "show" : "hide"}>
        <div className="music-typewriter-container">
        <div className="artist-typewriter">
        <Typewriter 
          onInit={(typewriter) => {
            typewriter.typeString('Artists').start()
          }}
        />
        </div>
      </div>
          {artists.map((artist) => (
            <MusicContainer
              key={artist.id}
              artist={artist}
              token={token}
              sendTracks={setHandleTracks}
              setShow={setShow}
            />
          ))}
        </div>
        <div className={show === "show" ? "hide" : "show"}>
          <div className="music-typewriter-container">
            <div className="artist-typewriter">
              <Typewriter 
                onInit={(typewriter) => {
                typewriter.typeString('Songs').start()
              }}
            />
            </div>
          </div>
          <ul>
          {handleTracks.map((track) => (
            <TrackList key={track.id} track={track} setPlayMe={setPlayMe} />
          ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
