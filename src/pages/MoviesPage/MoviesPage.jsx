import { useEffect, useState } from "react";
import { searchMovies } from "../../movies-api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query") || "";
    setSearchQuery(query);
  }, [searchParams]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await searchMovies(searchQuery);
        setMovies(data);
      } catch (error) {
        setError(true);
      }
    };

    if (searchQuery !== "") {
      getMovies();
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ query: event.target.search.value });
  };

  return (
    <div className={css.searchBox}>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Find movie</label>
        <input type="text" id="search" />
        <button type="submit">Search</button>
      </form>
      {error && <div>Something went wrong</div>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
