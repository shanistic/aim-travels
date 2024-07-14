import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#0D6EFD" }}
      >
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Aim Travels
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                <p>
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/flights" className="text-white">
                    Flights
                  </Link>
                </p>
                <p>
                  <Link to="/hotels" className="text-white">
                    Hotels
                  </Link>
                </p>
                <p>
                  <Link to="/hajj" className="text-white">
                    Hajj/Umrah
                  </Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 ">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <Link to="/" className="text-white">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-white">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-white">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-white">
                    Terms & Conditions
                  </Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <FaHome className="mr-3" /> New York, NY 10012, US
                </p>
                <p>
                  <FaEnvelope className="mr-3" /> info@gmail.com
                </p>
                <p>
                  <FaPhone className="mr-3" /> + 01 234 567 88
                </p>
                <p>
                  <FaPrint className="mr-3" /> + 01 234 567 89
                </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  Copyright © 2024
                  <Link to="" className="text-white"></Link>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <Link
                  to="https://facebook.com"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <FaFacebookF />
                </Link>

                <Link
                  to="https://twitter.com"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <FaTwitter />
                </Link>

                <Link
                  to="https://google.com"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <FaGoogle />
                </Link>

                <Link
                  to="https://instagram.com"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
