import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  
  return (
    <>
      <footer className="bg-dark text-center text-white mt-5 mb-1"
      >
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </section>

          <section className="">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example2">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Making Travelling Easy And Sofisticated at{" "}
              <span className="badge badge-light">
                <i className="fas fa-suitcase-rolling"></i> Universal Travels{" "}
              </span>{" "}
            </p>
          </section>

          <div>
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0 mt-3 mx-auto">
                <h5 className="text-uppercase">Our Services</h5>

                <ul className="list-unstyled mb-0">
                  <Link to="/list/1" className="text-white p-2">
                    Luxury
                  </Link>

                  <Link to="/list/2" className="text-white p-2">
                    Holiday
                  </Link>

                  <Link to="/list/3" className="text-white p-2">
                    Business
                  </Link>

                  <Link to="/list/4" className="text-white p-2">
                    Travel
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <p className="text-white">Universal Trips</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
