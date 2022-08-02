import Cards from "../components/Cards/Cards";
import { useAnime } from "../context/animeContext";
import "../components/Cards/Cards.css";

function RandomAnime() {
  const { animeList } = useAnime();

  return (
    <div className="cardContainer">
      {animeList &&
        animeList.map((anime) => (
          <Cards
            key={anime.mal_id}
            id={anime.mal_id}
            image={anime.images.jpg.image_url}
            title={anime.title}
          />
        ))}
    </div>
  );
}
export default RandomAnime;
