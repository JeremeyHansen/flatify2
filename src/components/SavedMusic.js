import SavedMusicCard from "./SavedMusicCard";

import {useState, useEffect} from "react";
import Typewriter from 'typewriter-effect'

function SavedMusic({ setPlayMe }) {
  const [savedMusicArray, setSavedMusicArray] = useState([]);

  useEffect(()=> {
      fetch("http://localhost:3001/artists")
      .then(res => res.json())
      .then(data => setSavedMusicArray(data))},[]);

  function handleDelete(id) {
      const updatedMusicArray = savedMusicArray.filter((song) => song.id !== id);
      setSavedMusicArray(updatedMusicArray);
  }

  const sortedMusicArray = savedMusicArray.sort(function(a, b) {
      let artistA = a.artist.toLowerCase();
      let artistB = b.artist.toLowerCase();
      if(artistA < artistB){
          return -1;
        }
        if(artistA > artistB){
          return 1;
        }
        return 0;
  });

  return (
    <div>
      <div className="saved-music-typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Saved Music').start()
          }}
        />
      </div>
      <div className="contain">
              {sortedMusicArray.map((savedArrayItem) => 
          <SavedMusicCard 
            key={savedArrayItem.id} 
            savedArrayItem={savedArrayItem} 
            setPlayMe={setPlayMe} 
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  )
}
=======
import {useState, useEffect} from "react"


function SavedMusic () {

    const [savedMusicArray, setSavedMusicArray] = useState([])
    useEffect(()=> {
        fetch("http://localhost:3001/artists")
        .then(res => res.json())
        .then(data => setSavedMusicArray(data))},[]);

        console.log(savedMusicArray);

    const cards = savedMusicArray.map((savedArrayItem) => {
        return <SavedMusicCard key={savedArrayItem.name} savedArrayItem={savedArrayItem} />
        })


    return (
        <>
        <h1 className="page-header">Saved Music</h1>
        {cards}
        </>
)}


export default SavedMusic
