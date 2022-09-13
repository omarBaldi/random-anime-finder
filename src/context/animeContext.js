import { createContext, useCallback, useContext, useState } from 'react';
import { getAnimesList } from '../services/getAnimesList';

const AnimeContext = createContext({});

/**
 *
 * TODO: replace nested useState with useReducer hook
 */
const AnimeProvider = ({ children }) => {
  const [apiState, setApiState] = useState({
    loading: true,
    animes: [],
    errorMessage: '',
  });

  const updateApiState = (key, updatedValue) => {
    setApiState((prevState) => ({ ...prevState, [key]: updatedValue }));
  };

  const getAnimes = useCallback(() => {
    getAnimesList()
      .then(({ animesList }) => updateApiState('animes', animesList))
      .catch((errorMessage) => updateApiState('errorMessage', errorMessage))
      .finally(() => updateApiState('loading', false));
  }, []);

  const contextValues = {
    ...apiState,
    getAnimes,
  };

  return (
    <AnimeContext.Provider value={contextValues}>
      {children}
    </AnimeContext.Provider>
  );
};

export const useAnime = () => useContext(AnimeContext);

export default AnimeProvider;
