import React, { useEffect, useState } from 'react';
import MusicContainer from './MusicContainer';
import TrackList from './TrackList';

export default function Music ({ token, setPlayMe }) {
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const [handleTracks, setHandleTracks] = useState([])
  const [savedList, setSavedList] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3001/artists")
      .then(res => res.json())
      .then(data => setSavedList(data))
  }, [])

  function searchArtists(e) {
    e.preventDefault();
    fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=artist&include_external=audio&limit=5`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setArtists(data.artists.items))
  }
  
  return (
    <div className="music-container">
        <h1 className="page-header">Music</h1>

      {token ?
        <form onSubmit={searchArtists}>
          <input type="text" placeholder="Search Artist" onChange={e => setSearchKey(e.target.value)}/>
          <button type={"submit"}>Search</button>
        </form>

        : <h2>Please login</h2>
        }

  
        <div className='contain'>
          <div className='left'>
          {artists.map((artist) => <MusicContainer key={artist.id} artist={artist} token={token} sendTracks={setHandleTracks}/>)}
          </div>
          <div className='right'>
            <h1>Songs         Album</h1>
            {handleTracks.map((track) => <TrackList key={track.id} track={track} setPlayMe={setPlayMe} />)}
          </div>
        </div>     
    </div>
  );
}
   