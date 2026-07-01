import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div>Page not found</div>
      <Link style={{ color: "white" }} to="/">
        Back to Home
      </Link>
    </>
  );
}

export default NotFound;
