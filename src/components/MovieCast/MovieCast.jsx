import css from "./MovieCast.module.css";
import { getCast } from "../../movies-api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        const data = await getCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error("Failed to fetch cast:", error);
      }
    };
    getData();
  }, [movieId]);

  if (!cast) return <div>Loading...</div>;
  if (cast.length === 0)
    return <div>There is no cast list for this movie.</div>;

  return (
    <div className={css.castBox}>
      <ul className={css.actorsList}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.actor}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className={css.actorImg}
              />
            ) : (
              <div className={css.noImagePlaceholder}>No Image</div>
            )}
            <p className={css.actorName}>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
