import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { getTrandingMovies } from "../../movies-api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const data = await getTrandingMovies();
    setMovies(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={css.homeContainer}>
      <h2 className={css.title}>Trending today</h2>
      <div className={css.wrapper}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;
