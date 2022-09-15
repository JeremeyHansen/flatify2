import React, { useEffect, useState } from "react";
import PlaylistCard from "./PlaylistCard";

function Playlists({ token, setPlayMe, songAdd }){
    const [playlistName, setPlaylistName] = useState([]);
    const [currentPlayList, setCurrentPlayList] = useState("");
    const [loadPlaylist, setLoadPlayList] = useState([]);

    useEffect(() => {
        fetch("https://api.spotify.com/v1/users/31vffukro7zdt2mkemxwt3v2wcqu/playlists", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(data => loadUserPlaylists(data))
    }, [])

    function loadUserPlaylists(data) {
        const listArray = data.items.map((pList) => pList)
        setPlaylistName(listArray)
    }

    useEffect(() =>{
        if(currentPlayList !== ""){
            fetch(`https://api.spotify.com/v1/playlists/${currentPlayList}/tracks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    uris: [songAdd],
                }),
            })
                .then(res => res.json())
                .then(data => console.log(data))    
        }
    }, [songAdd])

    function handleCreate(e) {
        e.preventDefault();
        fetch("https://api.spotify.com/v1/users/31vffukro7zdt2mkemxwt3v2wcqu/playlists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({name: `${e.target.name.value}`}),
        })
          .then(res => res.json())
          .then(data => getPlaylistInfo(data))
      }

      function getPlaylistInfo(data){
        const playlist = {
            id: data.id,
            name: data.name,
            tracks: data.tracks.items,
            uri: data.uri,
        }
        if(data !== false){
            setPlaylistName([...playlistName, playlist]);
        }
      }

      function handlePlayList(e) {
        setCurrentPlayList(e.target.value);
        setPlayMe(`spotify:playlist:${e.target.value}`);
      }

    return (
        <div>
            <div className="save-form-left">
                <form onSubmit={handleCreate}>
                    <input className="input-form" placeholder="Enter Playlist Name" type="text" id="playlistName" name="name"></input>
                    <input className="input-button" type="submit" value="Create"></input>
                </form>
            </div>
            <div className="save-form-right">
                <select className="input-form" name="choose" onChange={handlePlayList} >
                    <option className="input-button" value="">Choose Playlist</option>
                    {playlistName.map((playList) => <PlaylistCard key={playList.id} playlistInfo={playList} />)}
                </select>
            </div>
        </div>
    )
}

export default Playlists;