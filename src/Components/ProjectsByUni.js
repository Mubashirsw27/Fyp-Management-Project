import React from "react";
import Header from "./Header";
import "./Global.css"
import { useState, useEffect } from "react";
import Clock from "./Clock"
export const ProjectsByUni = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("march 01,2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div>
      <Header />
      <div id="content" className="py-4">
        <div className="container">
        {/* <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      /> */}
          <div className="row">
            {/* Left Panel
  ============================================= */}
            <aside className="col-lg-3">
              {/* Profile Details
    =============================== */}

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
                  Projects By University
                  {/* <span className="border text-success rounded-pill fw-500 text-2 px-3 py-1 ms-2">
                    50%
                  </span> */}
                </h3>
              </div>
              {/* Profile Completeness End */}
              {/* Recent Activity
                 =============================== */}
              <div className="bg-white shadow-sm rounded py-4 mb-4">
                {/* <h3 className="text-5 fw-400 d-flex align-items-center px-4 mb-4">
                  Recent Activity
                </h3> */}
                {/* Title
                    =============================== */}
                <div className="transaction-title py-2 px-4">
                  <div className="row fw-00">
                    <div className="col-2 col-sm-1 text-center">
                      <span className>P:id</span>
                    </div>
                    <div className="col col-sm-7">Description</div>
                    {/* <div className="col-auto col-sm-2 d-none d-sm-block text-center">
                      Status
                    </div> */}
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
                        <span className="d-block text-4 fw-300">01</span>
                      </div>
                      <div className="col col-sm-7">
                        <span className="d-block text-4">Project Title</span>
                        <span className="text-muted">Project Description</span>
                      </div>
                      <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"></div>
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
                        <span className="d-block text-4 fw-300">02</span>{" "}
                      </div>
                      <div className="col col-sm-7">
                        <span className="d-block text-4">Project Title</span>{" "}
                        <span className="text-muted">Project Description</span>
                      </div>
                      <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"></div>
                    </div>
                  </div>
                  <div
                    className="transaction-item px-4 py-3"
                    data-bs-toggle="modal"
                    data-bs-target="#transaction-detail"
                  >
                    <div className="row align-items-center flex-row">
                      <div className="col-2 col-sm-1 text-center">
                        <span className="d-block text-4 fw-300">03</span>{" "}
                      </div>
                      <div className="col col-sm-7">
                        <span className="d-block text-4">Project Title</span>{" "}
                        <span className="text-muted">
                          Withdraw to Bank account
                        </span>
                      </div>
                      <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"></div>
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
                      </div>
                      <div className="col col-sm-7">
                        <span className="d-block text-4">Project Title</span>
                        <span className="text-muted">Project Description</span>
                      </div>
                      <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"></div>
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
                        <div className="row">
                          <textarea className="textarea" placeholder="Add your commnet" />
                          <div className="bg-light rounded-start py-5">
                            <button className="btn bg-primary comment-button">Comment</button>
                          </div>
                          {/* <div className="col-sm-7">
                            <h5 className="text-5 fw-400 m-3">
                              Transaction Details
                              <button
                                type="button"
                                className="btn-close text-2 float-end"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </h5>
                            <hr />
                            <div className="px-3">
                              <ul className="list-unstyled">
                                <li className="mb-2">
                                  Payment Amount{" "}
                                  <span className="float-end text-3">
                                    $562.00
                                  </span>
                                </li>
                                <li className="mb-2">
                                  Fee{" "}
                                  <span className="float-end text-3">
                                    -$4.80
                                  </span>
                                </li>
                              </ul>
                              <hr className="mb-2" />
                              <p className="d-flex align-items-center fw-500 mb-0">
                                Total Amount{" "}
                                <span className="text-3 ms-auto">$557.20</span>
                              </p>
                              <hr className="mb-4 mt-2" />
                              <ul className="list-unstyled">
                                <li className="fw-500">Paid By:</li>
                                <li className="text-muted">Envato Pty Ltd</li>
                              </ul>
                              <ul className="list-unstyled">
                                <li className="fw-500">Transaction ID:</li>
                                <li className="text-muted">
                                  26566689645685976589
                                </li>
                              </ul>
                              <ul className="list-unstyled">
                                <li className="fw-500">Description:</li>
                                <li className="text-muted">
                                  Envato March 2021 Member Payment
                                </li>
                              </ul>
                              <ul className="list-unstyled">
                                <li className="fw-500">Status:</li>
                                <li className="text-muted">
                                  Completed
                                  <span className="text-success text-3 ms-1">
                                    <i className="fas fa-check-circle" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div> */}
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
