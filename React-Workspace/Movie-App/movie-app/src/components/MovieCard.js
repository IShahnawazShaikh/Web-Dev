import React from "react";
import "../style/MovieCard.css";
export default function MovieCard({ movie, key }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
    </div>
  );
}
