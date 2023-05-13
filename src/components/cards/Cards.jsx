import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = ({ infoApi }) => {
  let characters = useSelector((state) => state.characters.data);

  return (
    <div className="container-grid-cities row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center align-items-center row-gap-4 gx-3">
      {characters?.map((character) => (
        <div key={character.id} className="col">
          <div className="card h-100 w-100 p-0">
            <img
              src={character?.image}
              className="card-img-top card-image-character"
              alt={character.name}
            />
            <div className="card-body d-flex flex-column justify-content-center align-items-center gap-3">
              <h5 className="card-title">{character.name}</h5>
              <h6 className="card-subtitle">House: {character.house}</h6>
              <Link to={`/cities/id/${character.id}`} className="cities-btn">
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
