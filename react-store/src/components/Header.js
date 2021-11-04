import React from "react";
//import { config } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

//config.autoAddCss = false;
const Header = () => {

  // componentDidUpdate = () => {
  //   config.autoAddCss = false;

  // }
    
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-12">
              <div className="btn-group">
                <button
                  className="btn border dropdown-toggle my-md-4 my-2 text-white"
                  data-toggle="dropdown"
                  area-haspopup="true"
                  aria-expanded="false"
                >
                  USD
                </button>
                <div className="dropdown-menu">
                  <a href="!#" className="dropdown-item">
                    ERU - Euro
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 text-center">
              <h2 className="my-md-3 site-title text-white">Online Store</h2>
            </div>
            <div className="col-md-4 col-12 text-right">
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
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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

            <div className="navbar-nav">
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
}

export default Header;
