import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { MINIMUM_PAGE_VALUE } from '../constant';
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
    pageSelected: MINIMUM_PAGE_VALUE,
    errorMessage: '',
  });

  const updateApiState = (key, updatedValue) => {
    setApiState((prevState) => ({ ...prevState, [key]: updatedValue }));
  };

  const goToNextPage = () => {
    setApiState((prevState) => ({
      ...prevState,
      pageSelected: prevState.pageSelected + 1,
    }));
  };

  /**
   * Whenever the page value needs to be decreased, I need to make
   * sure that it will never go below the minimum page value (1)
   */
  const goToPreviousPage = () => {
    setApiState((prevState) => ({
      ...prevState,
      pageSelected: Math.max(MINIMUM_PAGE_VALUE, prevState.pageSelected - 1),
    }));
  };

  const getAnimes = useCallback(() => {
    getAnimesList({ page: apiState.pageSelected })
      .then(({ animesList }) => updateApiState('animes', animesList))
      .catch((errorMessage) => updateApiState('errorMessage', errorMessage))
      .finally(() => updateApiState('loading', false));
  }, [apiState.pageSelected]);

  useEffect(() => {
    getAnimes();
  }, [getAnimes]);

  const contextValues = {
    ...apiState,
    getAnimes,
    goToNextPage,
    goToPreviousPage,
  };

  return (
    <AnimeContext.Provider value={contextValues}>
      {children}
    </AnimeContext.Provider>
  );
};

export const useAnime = () => useContext(AnimeContext);

export default AnimeProvider;
