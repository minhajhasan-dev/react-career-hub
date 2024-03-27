import { Link } from "react-router-dom";

const ErrorPage = (error) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Error</h1>
      <p>Page not found</p>
      <Link to={"/"}>
      <button className="btn btn-secondary text-white">
        Go Home
      </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
