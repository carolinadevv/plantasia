import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Plantasia
        </a>
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
            {/* Espacio vacío para mantener el logo a la izquierda */}
          </ul>
          <ul className="navbar-nav">
            {/* Categorías principales */}
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accessories
              </a>
            </li>
            {/* Dropdown de Plants */}
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
                  <a className="dropdown-item" href="#">
                    Indoor Plants
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Outdoor Plants
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Succulents
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Flowering Plants
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Medicinal Plants
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cacti
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Pots and Accessories
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Large Plants
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Low Maintenance Plants
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            {/* Carrito */}
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
