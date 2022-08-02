import "./details.css";
import { useAnime } from "../context/animeContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AnimeDetails() {
  const { animeList } = useAnime();
  const { id } = useParams();
  const [animeDetail, setAnimeDetail] = useState({
    mal_id: "",
    title: "",
    images: { jpg: { image_url: "" } },
  });
  useEffect(() => {
    if (animeList) {
      animeList.map((anime) => {
        if (anime.mal_id === Number(id)) {
          setAnimeDetail(anime);
        }
        return true;
      });
    }
  });

  return (
    <div className="detailContainer">
      <div className="detailPage">
        <div className="detailLeft">
          <img src={animeDetail.images.jpg.image_url} alt={animeDetail.title} />
        </div>
        <div className="detailRight">{animeDetail.title}</div>
      </div>
    </div>
  );
}
export default AnimeDetails;
