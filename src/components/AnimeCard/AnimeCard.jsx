import './Card.css';
import { Link } from 'react-router-dom';

const AnimeCard = ({ images, title, mal_id: id }) => {
  return (
    <div className='card'>
      <div className='cardLeft'>
        <img className='cardImage' src={images.jpg.image_url} alt={title} />
      </div>
      <div className='cardContent'>
        <p className='cardTitle'>{title}</p>
        <p className='cardInside'>content</p>
        <Link className='seeMore' key={id} to={`/animes/${id}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default AnimeCard;
