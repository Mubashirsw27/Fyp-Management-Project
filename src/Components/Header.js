import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Header
        ============================================= */}
      <header id="header">
        <div className="container">
          <div className="header-row">
            <div className="header-column justify-content-start">
              {/* Logo
                ============================= */}
              <div className="logo me-3">
                <Link
                  to="/"
                  className="d-flex"
                  href="index.html"
                  title="Payyed - HTML Template"
                >
                  {/* <img src="images/logo.png" alt="Payyed" /> */}
                  <h3>FYP System</h3>
                </Link>
              </div>
              {/* Logo end */}
              {/* Collapse Button
                 ============================== */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#header-nav"
              >
                <span /> <span /> <span />
              </button>
              {/* Collapse Button end */}
              {/* Primary Navigation
                ============================== */}
              <nav className="primary-menu navbar navbar-expand-lg">
                <div id="header-nav" className="collapse navbar-collapse">
                  <ul className="navbar-nav me-auto">
                    <li className="">
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/project-by-uni">Projects By Uni</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Primary Navigation end */}
            </div>
            <div className="header-column justify-content-end">
              {/* My Profile
    ============================== */}

              <nav className="login-signup navbar navbar-expand">
                <ul className="navbar-nav">
                  <ul className="navbar-nav me-auto">
                    <li className="">
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign up</Link>
                    </li>
                  </ul>
                </ul>
              </nav>
              {/* My Profile end */}
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}
    </div>
  );
};

export default Header;
