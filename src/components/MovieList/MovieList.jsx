import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.moviesBox}>
      <ul className={`${css.movieList}`}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.movieItemContainer}>
            <Link
              to={`/movies/${movie.id}`}
              state={location}
              className={css.movieItem}
            >
              <div className={css.posterWrapper}>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    className={css.poster}
                  />
                ) : (
                  <div className={css.noPosterPlaceholder}>No Image</div>
                )}
                <p className={css.rating}>{movie.vote_average.toFixed(1)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
