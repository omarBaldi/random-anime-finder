import { useAnime } from '../../context/animeContext';
import { AnimeCard } from '../../components/AnimeCard';

/**
 *
 * TODO: rename card with more descriptive names and pass props with spread operator
 */
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
          <AnimeCard
            key={anime.mal_id}
            id={anime.mal_id}
            image={anime.images.jpg.image_url}
            title={anime.title}
          />
        ))}
      </div>
    </>
  );
};
export default AnimesPage;
