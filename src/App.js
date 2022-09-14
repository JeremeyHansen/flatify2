import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import About from "./components/About";
import Music from "./components/Music";
import SavedMusic from "./components/SavedMusic";
import Player from "./components/Player";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const CLIENT_ID = "b9cd3b08f037434b98664895837ca0e0";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [userToken, setUserToken] = useState("");
  const [playMe, setPlayMe] = useState("");

  useEffect(() => {
    const hash = window.location.hash; //set hash equal to information in url
    let token = window.localStorage.getItem("token");
    //If there is no token and there is a url, then get the token from the url
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setUserToken(token);
  }, []);

  const logout = () => {
    setUserToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <Navbar />
      <div className="button-div">
        {!userToken ? (
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20app-remote-control%20streaming%20user-read-email%20user-read-private%20user-library-modify%20user-library-read`}>
            <button className="login-button">Login</button>
          </a>
        ) : (
          <button className="login-button" onClick={logout}>Logout</button>
        )}
      </div>
      <Player token={userToken} trackUri={playMe} />
      <div className="container-items">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route
            path="/Music"
            element={<Music token={userToken} setPlayMe={setPlayMe} />}
          ></Route>
          <Route path="/SavedMusic" element={<SavedMusic />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
