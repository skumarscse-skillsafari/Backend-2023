import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        PostTracker
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav m-auto">
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
    </nav>
  );
};

export default Navbar;
