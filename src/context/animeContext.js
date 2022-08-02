import { createContext, useContext, useState } from "react";
import axios from "axios";

const Context = createContext();

const Provider = ({ children }) => {
  const [animeList, setAnimeList] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("https://api.jikan.moe/v4/anime");
    const { data: animes } = response.data;
    setAnimeList(animes);
  };

  const data = { animeList, setAnimeList, fetchData };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useAnime = () => useContext(Context);

export default Provider;
