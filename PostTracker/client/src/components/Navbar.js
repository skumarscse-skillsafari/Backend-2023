import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          PostTracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                PostLists
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
