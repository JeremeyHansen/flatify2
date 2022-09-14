
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
        <div className="saved-music-card">
            <img src={savedArrayItem.image}/>
            <span>{savedArrayItem.track}</span>
            <span>----</span>
            <span>{savedArrayItem.album}</span>
            <span>----</span>
            <span>{savedArrayItem.artist}</span>
            <span>----</span>
            <span>{savedArrayItem.track_length}</span>
            <span>----</span>
            <span>{savedArrayItem.explicit}</span>
            <span>----</span>
            <span>{savedArrayItem.popularity}</span>
            <button onClick={onSong}>Play Song</button>
            <span>-   -</span>
            <button onClick={onAlbum}>Play Album</button>
            <span>-   -</span>
            <span>-   -</span>
            <button onClick={onDelete}>Delete Song</button>
        </div>
    )
}

export default SavedMusicCard