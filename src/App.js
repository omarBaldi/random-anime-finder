import { useEffect } from "react";
import { useAnime } from "./context/animeContext";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AnimeDetails from "./pages/AnimeDetails";
import Navbar from "./components/Navbar/Navbar";

//pages
import Home from "./pages/Home";
import RandomAnime from "./pages/RandomAnime";
import AboutMe from "./pages/AboutMe";

function App() {
  const { fetchData } = useAnime();
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/randomanime" element={<RandomAnime />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/animedetails/:id" element={<AnimeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
