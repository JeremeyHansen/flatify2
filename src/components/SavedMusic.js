import SavedMusicCard from "./SavedMusicCard";
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

export default SavedMusic;