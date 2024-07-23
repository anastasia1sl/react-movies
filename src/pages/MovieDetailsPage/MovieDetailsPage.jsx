import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getSingleMovie } from "../../movies-api";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state || "/movies");

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        const data = await getSingleMovie(movieId);
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <Link to={goBackRef.current} className={css.backBtn}>
        Go Back
      </Link>
       
      <div className={css.movieBox}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className={css.poster}
          />
        ) : (
          <div className={css.noPosterPlaceholder}>No Image</div>
        )}
        <div className={css.mainInfo}>
          <h2 className={css.title}>
            {`${movie.title} (${movie.release_date.slice(0, 4)})`}
          </h2>
          <h3 className={css.overview}>Overview</h3>
          <p className={css.overview}>{movie.overview}</p>
          <h3 className={css.genre}>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <div className={css.moreInfoBox}>
        <h3 className={css.moreInfoTitle}>Additional information</h3>
        <div className={css.options}>
          <Link to="cast" state={location}>
            Cast
          </Link>
          <Link to="review" state={location}>
            Review
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
