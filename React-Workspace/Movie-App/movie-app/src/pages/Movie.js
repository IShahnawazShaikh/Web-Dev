import React from "react";
import { MovieList } from "../components";

export default function Movie({ movies, isLoading }) {
  return (
    <div>
      <MovieList movies={movies} isloading={isLoading} />
    </div>
  );
}
