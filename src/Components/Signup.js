import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div>
        {/* <div id="preloader">
          <div data-loader="dual-ring" />
        </div> */}
        {/* Preloader End */}
        <div id="main-wrapper">
          <div className="container-fluid px-0">
            <div className="row g-0 min-vh-100">
              <div className="col-md-6">
                {/* Get Verified! Text
                    ============================================= */}
                <div className="hero-wrap d-flex align-items-center h-100">
                  <div className="hero-mask opacity-8 bg-primary" />
                  <div
                    className="hero-bg hero-bg-scroll"
                    style={{
                      "background-image": "url('./images/bg/image-3.jpg')",
                    }}
                  />
                  <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                    <div className="row g-0">
                      <div className="col-10 col-lg-9 mx-auto">
                        <div className="logo mt-5 mb-5 mb-md-0">
                          {" "}
                          <a
                            className="d-flex"
                            href="index.html"
                            title="Payyed - HTML Template"
                          >
                            <img src="images/logo-light.png" alt="Payyed" />
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="row g-0 my-auto">
                      <div className="col-10 col-lg-9 mx-auto">
                        <h1 className="text-11 text-white mb-4">
                          Get Verified!
                        </h1>
                        <p className="text-4 text-white lh-base mb-5">
                          Every day, Payyed makes thousands of customers happy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Get Verified! Text End */}
              </div>
              <div className="col-md-6 d-flex align-items-center">
                {/* SignUp Form
                    ============================================= */}
                <div className="container my-4">
                  <div className="row g-0">
                    <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                      <h3 className="fw-400 mb-4">Sign Up</h3>
                      <form id="loginForm" method="post">
                        <div className="mb-3">
                          <label htmlFor="fullName" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            required
                            placeholder="Enter Your Name"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="emailAddress" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="emailAddress"
                            required
                            placeholder="Enter Your Email"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="loginPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="loginPassword"
                            required
                            placeholder="Enter Password"
                          />
                        </div>
                        <div className="d-grid mt-4 mb-3">
                          <button className="btn btn-primary" type="submit">
                            Sign Up
                          </button>
                        </div>
                      </form>
                      <p className="text-3 text-center text-muted">
                        Already have an account? <Link to="/">Log In</Link>
                      </p>
                    </div>
                  </div>
                </div>
                {/* SignUp Form End */}
              </div>
            </div>
          </div>
        </div>
        {/* Back to Top
            ============================================= */}
        <a
          id="back-to-top"
          data-bs-toggle="tooltip"
          title="Back to Top"
          href="/"
        >
          <i className="fa fa-chevron-up" />
        </a>
      </div>
    </div>
  );
};

export default Signup;
