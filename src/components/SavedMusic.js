import {useState, useEffect} from "react"


function SavedMusic () {
    fetch("http://localhost:3001/artists")
    .then(res => res.json())
    .then(savedMusicArray => console.log(savedMusicArray))



    return <h1 className="page-header">Saved Music</h1>
}

export default SavedMusic;