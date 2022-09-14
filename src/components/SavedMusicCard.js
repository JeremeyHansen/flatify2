import star from '../star.png';
import starFull from '../starFull.png';
import { useState } from 'react';

function SavedMusicCard({savedArrayItem, setPlayMe, handleDelete}) {
    const [toggle, setToggle] = useState(savedArrayItem.like);

    function onSong() {
        setPlayMe(savedArrayItem.uri)
    }

    function onAlbum() {
        setPlayMe(savedArrayItem.album_uri)
    }

    function onLike() {
        console.log(toggle)
        let state = !toggle;
        fetch(`http://localhost:3001/artists/${savedArrayItem.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                like: state,
            }),
        })
            .then(res => res.json())
            .then(data => setToggle(data.like));

    }

    function onDelete() {
        fetch(`http://localhost:3001/artists/${savedArrayItem.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(() => handleDelete(savedArrayItem.id))
    }

    return(
        <li className="saved-music-card">
            <img className="music-card-image" src={savedArrayItem.image}/>
            <p className="bold-name"><span className="bold-name-title" >Song: </span>{savedArrayItem.track} </p>
            <p><span className="bold-text">Artist:</span> {savedArrayItem.artist}</p>
            <p className="ellipsis"><span className="bold-text">Album:</span> {savedArrayItem.album} </p>
            <button className="card-buttons" onClick={onSong}>Play Song</button>
            <button className="card-buttons" onClick={onAlbum}>Play Album</button>
            <button className="card-buttons" onClick={onDelete}>Delete Song</button>
            <img className="star" src={toggle ? starFull : star} onClick={onLike}></img>
        </li>
    )
}

export default SavedMusicCard