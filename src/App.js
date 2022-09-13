import React, { useEffect } from 'react';
import { useAnime } from './context/animeContext';
import { Routes, Route } from 'react-router-dom';
import { AboutPage, AnimeDetailsPage, AnimesPage } from './pages';
import Navbar from './components/Navbar/Navbar';
import './App.css';

/**
 *
 * @returns
 * TODO: possibly adding a not found route to redirect the user back to homepage
 * TODO: rename the pages with more descriptive names
 * TODO: implement absolute imports
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
        <Route path='/' element={<AnimesPage />} />
        <Route path='/animes' element={<AnimesPage />} />
        <Route path='/animes/:id' element={<AnimeDetailsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
