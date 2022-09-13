import React from "react";
import SpotifyPlayer from 'react-spotify-web-playback';

function Player({ token, trackUri }){
    function onClick(e){
        console.log(e)
    }

    return(
        <SpotifyPlayer
            token={token}
            autoPlay={true}
            magnifySliderOnHover={true}
            uris={trackUri ? [trackUri] : []}
            styles={{
                activeColor: '#fff',
                bgColor: '#222',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#ccc',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
              }}
        />
    )
}

export default Player;