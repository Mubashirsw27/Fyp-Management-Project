import React from "react";
import Header from "./Header";

export const DemoScreen = () => {
  return (
    <div>
      <Header />
      <div id="content" className="py-4">
        <div className="container">
          <div className="row">
            {/* Left Panel
  ============================================= */}
            <aside className="col-lg-3">
              {/* Profile Details
    =============================== */}
              <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                <div className="profile-thumb mt-3 mb-4">
                  <img
                    className="rounded-circle"
                    src="images/profile-thumb.jpg"
                    alt
                  />
                  <div
                    className="profile-thumb-edit bg-primary text-white"
                    data-bs-toggle="tooltip"
                    title="Change Profile Picture"
                  >
                    <i className="fas fa-camera position-absolute" />
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                    />
                  </div>
                </div>
                <p className="text-3 fw-500 mb-2">Hello, Smith Rhodes</p>
                <p className="mb-2">
                  <a
                    href="settings-profile.html"
                    className="text-5 text-light"
                    data-bs-toggle="tooltip"
                    title="Edit Profile"
                  >
                    <i className="fas fa-edit" />
                  </a>
                </p>
              </div>
              {/* Profile Details End */}
              {/* Available Balance
    =============================== */}

              {/* Available Balance End */}
              {/* Need Help?
    =============================== */}
              <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                <div className="text-17 text-light my-3">
                  <i className="fas fa-comments" />
                </div>
                <h3 className="text-5 fw-400 my-4">Need Help?</h3>
                <p className="text-muted opacity-8 mb-4">
                  Have questions or concerns regrading your Project?
                  <br />
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary">
                    Contact With Your Supervisor
                  </a>
                </div>
              </div>
              {/* Need Help? End */}
            </aside>
            {/* Left Panel End */}
            {/* Middle Panel
                ============================================= */}
            <div className="col-lg-9">
              {/* Profile Completeness
                 =============================== */}
              <div className="bg-white shadow-sm rounded p-4 mb-4">
                <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                  Projects Descriptions
                  {/* <span className="border text-success rounded-pill fw-500 text-2 px-3 py-1 ms-2">
                    50%
                  </span> */}
                </h3>
              </div>
              {/* Profile Completeness End */}
              {/* Recent Activity
                 =============================== */}
              <div className="bg-white shadow-sm rounded py-4 mb-4">
                <h3 className="text-5 fw-400 d-flex align-items-center px-4 mb-4">
                  Recent Activity
                </h3>
                {/* Title
                    =============================== */}
                <div className="transaction-title py-2 px-4">
                  <div className="row fw-00">
                    <div className="col-2 col-sm-1 text-center">
                      <span className>Date</span>
                    </div>
                    <div className="col col-sm-7">Description</div>
                    <div className="col-auto col-sm-2 d-none d-sm-block text-center">
                      Status
                    </div>
                    {/* <div className="col-3 col-sm-2 text-end">Amount</div> */}
                  </div>
                </div>
                {/* Title End */}
                {/* Transaction List
                    ============================== */}
                <div className="transaction-list">
                  <div
                    className="transaction-item px-4 py-3"
                    data-bs-toggle="modal"
                    data-bs-target="#transaction-detail"
                  >
                    <div className="row align-items-center flex-row">
                      <div className="col-2 col-sm-1 text-center">
                        <span className="d-block text-4 fw-300">16</span>
                        <span className="d-block text-1 fw-300 text-uppercase">
                          APR
                        </span>
                      </div>
                      <div className="col col-sm-7">
                        <span className="d-block text-4">Project Title</span>
                        <span className="text-muted">Project Description</span>
                      </div>
                      <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                        <span
                          className="text-warning"
                          data-bs-toggle="tooltip"
                          title="In Progress"
                        >
                          <i className="fas fa-ellipsis-h" />
                        </span>
                      </div>
                      {/* <div className="col-3 col-sm-2 text-end text-4">
                        <span className="text-nowrap">- $562</span>
                        <span className="text-2 text-uppercase">(USD)</span>
                      </div> */}
                    </div>
                  </div>
                  <div
                    className="transaction-item px-4 py-3"
                    data-bs-toggle="modal"
                    data-bs-target="#transaction-detail"
                  >
                    <div className="row align-items-center flex-row">
                      <div className="col-2 col-sm-1 text-center">
                        <span className="d-block text-4 fw-300">15</span>{" "}
                        <span className="d-block text-1 fw-300 text-uppercase">
                          APR
                        </span>
                      </div>
                      <div className="col col-sm-7">
                        <span className="d-block text-4">Project Title</span>{" "}
                        <span className="text-muted">Project Description</span>
                      </div>
                      <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                        <span
                          className="text-success"
                          data-bs-toggle="tooltip"
                          title="Completed"
                        >
                          <i className="fas fa-check-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="transaction-item px-4 py-3"
                    data-bs-toggle="modal"
                    data-bs-target="#transaction-detail"
                  >
                    <div className="row align-items-center flex-row">
                      <div className="col-2 col-sm-1 text-center">
                        <span className="d-block text-4 fw-300">04</span>{" "}
                        <span className="d-block text-1 fw-300 text-uppercase">
                          APR
                        </span>{" "}
                      </div>
                      <div className="col col-sm-7">
                        <span className="d-block text-4">Project Title</span>{" "}
                        <span className="text-muted">
                          Withdraw to Bank account
                        </span>
                      </div>
                      <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                        <span
                          className="text-success"
                          data-bs-toggle="tooltip"
                          title="Completed"
                        >
                          <i className="fas fa-check-circle" />
                        </span>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    className="transaction-item px-4 py-3"
                    data-bs-toggle="modal"
                    data-bs-target="#transaction-detail"
                  >
                    <div className="row align-items-center flex-row">
                      <div className="col-2 col-sm-1 text-center">
                        <span className="d-block text-4 fw-300">28</span>{" "}
                        <span className="d-block text-1 fw-300 text-uppercase">
                          MAR
                        </span>
                      </div>
                      <div className="col col-sm-7">
                        <span className="d-block text-4">Project Title</span>
                        <span className="text-muted">Project Description</span>
                      </div>
                      <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3">
                        <span
                          className="text-danger"
                          data-bs-toggle="tooltip"
                          title="Cancelled"
                        >
                          <i className="fas fa-times-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Transaction List End */}
                {/* Transaction Item Details Modal
      =========================================== */}
                <div
                  id="transaction-detail"
                  className="modal fade"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered transaction-details"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="row g-0">
                          <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-start py-4">
                            <div className="my-auto text-center">
                              <div className="text-17 text-white my-3">
                                <i className="fas fa-building" />
                              </div>
                              <h3 className="text-4 text-white fw-400 my-3"></h3>
                              <div className="text-8 fw-500 text-white my-4"></div>
                              <p className="text-white">15 March 2021</p>
                            </div>
                          </div>
                          <div className="col-sm-7">
                            <h5 className="text-5 fw-400 m-3">
                              FYP Description
                              <button
                                type="button"
                                className="btn-close text-2 float-end"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </h5>
                            <p>dumy text</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Transaction Item Details Modal End */}
                {/* View all Link
      =============================== */}

                {/* View all Link End */}
              </div>
              {/* Recent Activity End */}
            </div>
            {/* Middle Panel End */}
          </div>
        </div>
      </div>
    </div>
  );
};
