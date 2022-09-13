import { useParams } from 'react-router-dom';
import { useCurrentAnime } from '../hooks/useCurrentAnime';
import './details.css';

function AnimeDetails() {
  const { id } = useParams();
  const currentAnime = useCurrentAnime(+id);

  if (typeof currentAnime === 'undefined') {
    return <div>No anime was found for the following id {id}</div>;
  }

  const {
    title,
    background: description,
    images: {
      jpg: { image_url: defaultCoverImage },
    },
    trailer: { embed_url: youtubeEmbedUrl },
  } = currentAnime;

  return (
    <div>
      <h1>{title}</h1>
      <div style={{ display: 'flex' }}>
        <img src={defaultCoverImage} title={title} alt='' />
        <p>{description}</p>
      </div>
      <iframe
        title={title}
        width='100%'
        height={800}
        src={youtubeEmbedUrl}
      ></iframe>
    </div>
  );
}
export default AnimeDetails;
