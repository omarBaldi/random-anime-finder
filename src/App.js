import { useEffect } from 'react';
import { useAnime } from './context/animeContext';
import { Routes, Route } from 'react-router-dom';
import AnimeDetails from './pages/AnimeDetails';
import Navbar from './components/Navbar/Navbar';
import RandomAnime from './pages/RandomAnime';
import AboutMe from './pages/AboutMe';
import './App.css';

/**
 *
 * @returns
 * TODO: refactor logic for getting animes list from endpoint
 * TODO: possibly adding a not found route to redirect the user back to homepage
 * TODO: rename the pages with more descriptive names
 */
function App() {
  const { getAnimes } = useAnime();

  useEffect(() => {
    getAnimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<RandomAnime />} />
        <Route path='/animes' element={<RandomAnime />} />
        <Route path='/animes/:id' element={<AnimeDetails />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
