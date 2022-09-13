import { useEffect, useState } from 'react';
import { useAnime } from '../context/animeContext';

/**
 *
 * @param {*} id
 */
export const useCurrentAnime = (id) => {
  const { animes } = useAnime();
  const [currentAnime, setCurrentAnime] = useState(undefined);

  useEffect(() => {
    const animeFound = animes.find(({ mal_id: animeId }) => animeId === id);
    setCurrentAnime(animeFound);
  }, [animes, id]);

  return currentAnime;
};
