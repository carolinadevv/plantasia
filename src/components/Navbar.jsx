import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Plantasia
        </NavLink>
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
          <ul className="navbar-nav me-auto">
            {/* Blank space to keep the logo to the left*/}
          </ul>
          <ul className="navbar-nav">
            {/* Categories main */}
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="category/sets">
                Sets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="category/accesories">
                Accesories
              </NavLink>
            </li>
            {/* Dropdown Plants */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Plants
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="category/Indoor Plants"
                  >
                    Indoor Plants
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="category/Outdoor Plants"
                  >
                    Outdoor Plants
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="category/Succulents">
                    Succulents
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="contact">
                Contact
              </NavLink>
            </li>
            {/* Cart */}
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
