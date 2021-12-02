import React from "react";
import { Link } from "react-router-dom";
import "../style/MovieCard.css";
export default function MovieCard({ movie, key }) {
  return (
    <Link to={`/movie-list/${movie.imdbID}`}>
      <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} />
        <p>Released : {movie.Year}</p>
        <p>{movie.Title}</p>
      </div>
    </Link>
  );
}
