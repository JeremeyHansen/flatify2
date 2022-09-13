import Navbar from "./Navbar";
import About from "./components/About";
import Music from "./components/Music";
import SavedMusic from "./components/SavedMusic";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
        <Navbar />
        <div className="container-items">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Music" element={<Music />}></Route>
            <Route path="/SavedMusic" element={<SavedMusic />}></Route>
          </Routes>
        </div>
    </>
  );
}

export default App;
