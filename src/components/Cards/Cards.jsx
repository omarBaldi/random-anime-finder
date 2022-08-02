import "./Cards.css";
import { Link } from "react-router-dom";

function Cards({ image, title, id }) {
  console.log();
  return (
    <div className="card">
      <div className="cardLeft">
        <img className="cardImage" src={image} alt={title} />
      </div>
      <div className="cardContent">
        <p className="cardTitle">{title}</p>
        <p className="cardInside">content</p>
        <Link className="seeMore" key={id} to={`/animedetails/${id}`}>
          Devamını gör
        </Link>
      </div>
    </div>
  );
}
export default Cards;
