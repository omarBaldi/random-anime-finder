import { useAnime } from '../../context/animeContext';
import { AnimeCard } from '../../components/AnimeCard';

const AnimesPage = () => {
  const { animes, goToNextPage, goToPreviousPage, pageSelected } = useAnime();

  return (
    <>
      <div>
        <h3>Page {pageSelected}</h3>
        <button onClick={goToPreviousPage}>Go to previous page</button>
        <button onClick={goToNextPage}>Go to following page</button>
      </div>

      <div className='cardContainer'>
        {animes.map((anime) => (
          <AnimeCard key={anime.mal_id} {...anime} />
        ))}
      </div>
    </>
  );
};
export default AnimesPage;
