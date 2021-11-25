import "./App.css";
import { NavBar, MovieList } from "./components";
import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://www.omdbapi.com";
const apikey = "aa660442";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const search = async (e) => {
    if (e.code === "Enter") {
      setIsLoading(true);
      //console.log("cliked", inputValue);
      let response = await axios.get(
        BASE_URL + "/?s=" + inputValue + "&apikey=" + apikey
      );
      setIsLoading(false);
      console.log("respone: ", response.data.Search);
      setMovies(response.data.Search);
      console.log("list", movies);
    }
  };

  return (
    <div className="main">
      <NavBar setInputValue={setInputValue} search={search}></NavBar>
      <MovieList movies={movies} isLoading={isLoading} />
    </div>
  );
}

export default App;
