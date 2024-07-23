import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.errorBox}>
      <p className={css.error}>Page not found </p>
      <Link to="/" className={css.homeBtn}>
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
