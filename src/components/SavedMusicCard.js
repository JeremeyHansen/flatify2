
function SavedMusicCard({savedArrayItem, setPlayMe, handleDelete}) {
    function onSong() {
        setPlayMe(savedArrayItem.uri)
    }

    function onAlbum() {
        setPlayMe(savedArrayItem.album_uri)
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
            <div className="image-wrapper">
            <img className="music-card-image" src={savedArrayItem.image}/>
            </div>
            <p className="bold-name"><span className="bold-name-title" >Song: </span>{savedArrayItem.track} </p>
            <p><span className="bold-text">Artist:</span> {savedArrayItem.artist}</p>
            <p className="ellipsis"><span className="bold-text">Album:</span> {savedArrayItem.album} </p>
            <button className="card-buttons" onClick={onSong}>Play Song</button>
            <button className="card-buttons" onClick={onAlbum}>Play Album</button>
            <button className="card-buttons" onClick={onDelete}>Delete Song</button>
        </li>
    )
}

export default SavedMusicCard