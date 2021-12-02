import React from "react";
import "../style/MovieList.css";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, isLoading }) {
  if (isLoading) return <div>Movie is Loading...</div>;
  else {
    return (
      <div className="movie-list">
        {movies.map((movie) => {
          // console.log("movie: ", movie);
          return <MovieCard movie={movie} key={movie.imdbID} />;
        })}
      </div>
    );
  }
}
