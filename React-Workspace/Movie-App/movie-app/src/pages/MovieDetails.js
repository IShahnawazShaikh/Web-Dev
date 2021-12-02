import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import "../style/MovieDetails.css";

// "Title": "Garasu no Jonî: Yajû no yô ni miete",
// "Year": "1962",
// "Rated": "N/A",
// "Released": "30 Sep 1962",
// "Runtime": "108 min",
// "Genre": "Action, Crime",
// "Director": "Koreyoshi Kurahara",
// "Writer": "Nobuo Yamada",
// "Actors": "Jô Shishido, Izumi Ashikawa, Jôji Ai",
// "Plot": "N/A",
// "Language": "Japanese",
// "Country": "Japan",
// "Awards": "N/A",
// "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1NDQwNDAxMV5BMl5BanBnXkFtZTcwNjIwMDg1MQ@@._V1_SX300.jpg",
// "Ratings": [
//     {
//         "Source": "Internet Movie Database",
//         "Value": "6.1/10"
//     }
// ],
// "Metascore": "N/A",
// "imdbRating": "6.1",
// "imdbVotes": "12",
// "imdbID": "tt1160523",
// "Type": "movie",
// "DVD": "N/A",
// "BoxOffice": "N/A",
// "Production": "N/A",
// "Website": "N/A",
// "Response": "True"
export default function MovieDetails() {
  const { imdbID } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [moviesDetails, setmoviesDetails] = useState(null);
  console.log(imdbID);
  const apikey = "aa660442";
  const fetchData = async (e) => {
    let res = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=${apikey}`
    );
    setmoviesDetails(res.data);
    setisLoading(false);
    console.log("movie details: ", res.data);
  };
  useEffect(() => {
    fetchData();
  }, [imdbID]);

  if (isLoading) {
    return <h1>Movie is Loading...</h1>;
  } else if (moviesDetails) {
    return (
      <div className="movie-page">
        <div className="movie-details">
          <div className="movie-poster">
            <img src={moviesDetails.Poster} />
          </div>
          <div className="movie-info">
            <h1>{moviesDetails.Title}</h1>
            <h3>Rating {moviesDetails.imdbRating}</h3>
            <h6>Released: {moviesDetails.Year}</h6>
            <h5>Actors : {moviesDetails.Actors}</h5>
            <h5>Director : {moviesDetails.Director}</h5>
            <h5>Writers : {moviesDetails.Writer}</h5>
            <h5>Genres: {moviesDetails.Genre}</h5>
            <p>Plot : {moviesDetails.Plot}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
