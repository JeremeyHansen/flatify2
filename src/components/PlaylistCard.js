import React from "react";

function PlaylistCard({ playlistInfo }) {
    return(
        <option id={playlistInfo.id} value={playlistInfo.id}>{playlistInfo.name}</option>
    )
}

export default PlaylistCard;