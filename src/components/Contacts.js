import { useState } from "react";
import contacts from "../contacts.json";

import ImprovedMovieCard from "./ImprovedMovieCard";

function ImprovedMovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [showMovies, setShowMovies] = useState(true);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  const toggleShowMovies = () => {
    setShowMovies(!showMovies);
  };

  return (
    <div>
      <h2>Improved Movie List</h2>

      <button onClick={toggleShowMovies}>{showMovies ? "Hide" : "Show"}</button>
      {/* Si showMovies es true o similar muestra... */}
      {showMovies &&
        movies.map((movie) => {
          return (
            <ImprovedMovieCard
              key={movie._id}
              movie={movie}
              clickToDelete={deleteMovie}
            />
          );
        })}
    </div>
  );
}

export default ImprovedMovieList;