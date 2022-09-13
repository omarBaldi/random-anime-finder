import Card from '../../components/Card/Card';
import { useAnime } from '../../context/animeContext';
import '../components/Card/Card.css';

const AnimesPage = () => {
  const { animes } = useAnime();

  return (
    <div className='cardContainer'>
      {animes.map((anime) => (
        <Card
          key={anime.mal_id}
          id={anime.mal_id}
          image={anime.images.jpg.image_url}
          title={anime.title}
        />
      ))}
    </div>
  );
};
export default AnimesPage;
