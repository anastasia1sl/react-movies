import { getReviews } from "../../movies-api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import css from "./MovieReview.module.css";

const MovieReview = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getReviewData = async () => {
      const data = await getReviews(movieId);
      setReview(data);
      console.log(data);
    };
    getReviewData();
  }, [movieId]);

  if (!review) return <div>Loading...</div>;
  if (review.length === 0) return <div>No reviews found.</div>;

  return (
    <div className={css.reviewBox}>
      <ul className={css.reviewList}>
        {review.map((item) => (
          <li key={item.id} className={css.review}>
            <h3>Author: {item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReview;
