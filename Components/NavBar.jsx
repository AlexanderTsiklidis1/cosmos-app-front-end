import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/planets" className="nav-link">
          Posts
        </Link>
        <Link to="/planets/new" className="nav-link">
          New Post
        </Link>
      </div>
    </nav>
  );
}