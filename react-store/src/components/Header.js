import React from "react";

const Header = () => {
  return (
    <header className="position-relative">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-12">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle my-md-4 my-2 text-white"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                // area-haspopup="true"
                aria-expanded="false"
              >
                USD
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a href="!#" className="dropdown-item">
                    ERU - Euro
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-12 text-center">
            <h2 className="my-md-3 site-title text-white">Online Store</h2>
          </div>
          <div className="col-md-4 col-12 text-sm-end text-center">
            <p className="my-md-4 header-links">
              <a href="!#" className="px-2">
                Sign In
              </a>
              <a href="!#" className="px-1">
                Create an Account
              </a>
            </p>
          </div>
        </div>
      </div>
      <div id="hamburger-container" className="container-fluid p-0">
        <nav className="navbar navbar-expand-md navbar-light bg-white justify-content-end h-100 py-0">
          <button
            className="navbar-toggler position-absolute bg-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="offcanvasNavbar"
            // aria-expanded="false"
            aria-label="Toggle navigation drawer"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            id="navbarNav"
            tabindex="-1"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5> */}
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul id="menu" className="navbar-nav flex-grow-1 pe-3 align-items-center">
                <li className="nav-item active">
                  <a className="nav-link" href="!#">
                    HOME <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    FEATURES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    COLLECTION
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    SHOP
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="!#">
                    ABOUT US
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-nav flex-row py-0">
            <li className="nav-item rounded-circle mx-2 search-icon">
              <i className="fas fa-search p-2"></i>
            </li>
            <li className="nav-item rounded-circle mx-2 basket-icon">
              <i className="fas fa-shopping-basket p-2"></i>
            </li>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
