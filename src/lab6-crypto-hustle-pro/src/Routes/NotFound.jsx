import { Link } from "react-router";

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
