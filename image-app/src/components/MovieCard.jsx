import React from "react";

const MovieCard = (props) => {
  const { name, year, img } = props;
  return (
    <div className="movie-card">
      <img src={img} alt="" />
      <p className="movie-name">{name}</p>
      <p className="movie-year">Year:{year}</p>
    </div>
  );
};

export default MovieCard;
