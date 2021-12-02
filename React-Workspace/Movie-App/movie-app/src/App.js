import "./App.css";
import { NavBar } from "./components";
import { useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from "react-router-dom";

import MovieDetails from "./pages/MovieDetails";

const BASE_URL = "https://www.omdbapi.com";
const apikey = "aa660442";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // let history = useHistory();

  const search = async (e) => {
    if (e.code === "Enter") {
      setIsLoading(true);
      let response = await axios.get(
        BASE_URL + "/?s=" + inputValue + "&apikey=" + apikey
      );
      setIsLoading(false);
      console.log("respone: ", response.data.Search);
      setMovies(response.data.Search);
      console.log("list", movies);

      // history.push("/movie-list");
    }
  };
  return (
    <div className="main">
      <NavBar setInputValue={setInputValue} search={search}></NavBar>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/movie-list"
            element={<Movie movies={movies} isLoading={isLoading} />}
          />
          <Route path="/movie-list/:imdbID" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
