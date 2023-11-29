import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/planets" className="nav-link">
        Celestial Objects
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/planets/new" className="nav-link">
          New Celestial Object
        </Link>
      </div>
    </nav>
  );
}