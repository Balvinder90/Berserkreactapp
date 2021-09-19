import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error">
      <div className="error__container">
        <img
          className="error__behelit"
          src="img/behelit.png"
          alt="Page not found"
          title="Page not found"
        />
        <p className="error__info">404 sorry, page not found</p>
        <Link className="error__link" to="/">
          Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
