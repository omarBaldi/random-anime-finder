import React, { useEffect } from 'react';
import { useAnime } from './context/animeContext';
import { Routes, Route } from 'react-router-dom';
import { AboutPage, AnimeDetailsPage, AnimesPage, NotFoundPage } from './pages';
import Navbar from './components/Navbar/Navbar';
import './App.css';

/**
 *
 * @returns
 * TODO: implement pagination functionality
 * TODO: implement caching functionality to store results
 * TODO: implement absolute imports
 * TODO: update README.md file to describe endpoint additional params (not clear now)
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
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
