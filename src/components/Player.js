import React from "react";
import SpotifyPlayer from 'react-spotify-web-playback';

function Player({ token, trackUri }){

    return(
        <SpotifyPlayer
            token={token}
            autoPlay={true}
            magnifySliderOnHover={true}
            uris={trackUri ? [trackUri] : []}
            styles={{
                activeColor: 'white',
                bgColor: 'black',
                color: 'white',
                loaderColor: '#fff',
                sliderColor: '#ccc',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
              }}
        />
    )
}

export default Player;