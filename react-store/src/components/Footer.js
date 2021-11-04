import React from "react";
//import { config } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faTwitter,
//     faFacebookF,
//     faInstagram,
//     faSkype,
//     faPinterestP,
//     faYoutube,
//     faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
// import { faHome, faPaperPlane, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import Instagram1 from "../assets/images/256_n.jpg";
import Instagram2 from "../assets/images/792_n.jpg";
import Instagram3 from "../assets/images/392_n.jpg";
import Instagram4 from "../assets/images/664_n.jpg";
import Instagram5 from "../assets/images/088_n.jpg";
import Instagram6 from "../assets/images/896_n.jpg";
import Payment from "../assets/images/payment.png";
//config.autoAddCss = false;

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid px-0 px-sm-3 px-lg-5">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <h4 className="text-center px-0">Contact Us</h4>
            <div className="row text-secondary text-center">
              <div className="col-12">
                <i class="fa fa-home pr-2"></i>
                <small>No 40 Baria Street 133/2 New York City, NY</small>
              </div>
            </div>
            <div className="row text-secondary py-3 text-center">
              <div className="col-12">
                <i class="fa fa-paper-plane pr-2"></i>
                <small>www.dailywebtuition.com</small>
              </div>
            </div>
            <div className="row text-secondary text-center">
              <div className="col-12">
                <i class="fa fa-phone-volume pr-2"></i>
                <small>(800) 123456789</small>
              </div>
            </div>
            <div className="row social text-secondary text-center">
              <div className="col-12 py-3">
                <i class="fab fa-twitter pl-0"></i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-skype"></i>
                <i class="fab fa-pinterest-p"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <h4 className="text-center">Our Services</h4>
            <div className="d-flex flex-column text-center">
              <small className="pt-0">New York</small>
              <small>London SF</small>
              <small>Cockfosters BP</small>
              <small>Los Angeles</small>
              <small>Chicago</small>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <h4 className="text-center">Extras</h4>
            <div className="d-flex flex-column text-center">
              <small className="pt-0">About Store</small>
              <small>New Collection</small>
              <small>Contact Us</small>
              <small>Latest News</small>
              <small>Our Sitemap</small>
            </div>
          </div>
          <div className="col-12 px-2 pl-sm-5">
            <h4 className="text-center text-sm-left">Follow Instagram</h4>
            <div className="row d-flex justify-content-center justify-content-sm-start pb-1">
              <div
                className="col-4"
                style={{ maxWidth: "128px", maxHeight: "128px" }}
              >
                <img
                  src={Instagram1}
                  alt="Instagram 1"
                  style={{ width: "128px" }}
                  className="img-fluid pr-1 h-100"
                />
              </div>
              <div
                className="col-4"
                style={{ maxWidth: "128px", maxHeight: "128px" }}
              >
                <img
                  src={Instagram2}
                  alt="Instagram 2"
                  style={{ width: "128px" }}
                  className="img-fluid pr-1 h-100"
                />
              </div>
              <div
                className="col-4"
                style={{ maxWidth: "128px", maxHeight: "128px" }}
              >
                <img
                  src={Instagram3}
                  alt="Instagram 3"
                  style={{ width: "128px" }}
                  className="img-fluid h-100"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center justify-content-sm-start">
              <div
                className="col-4"
                style={{ maxWidth: "128px", maxHeight: "128px" }}
              >
                <img
                  src={Instagram4}
                  alt="Instagram 4"
                  style={{ width: "128px" }}
                  className="img-fluid pr-1 h-100"
                />
              </div>
              <div
                className="col-4"
                style={{ maxWidth: "128px", maxHeight: "128px" }}
              >
                <img
                  src={Instagram5}
                  alt="Instagram 5"
                  style={{ width: "128px" }}
                  className="img-fluid pr-1 h-100"
                />
              </div>
              <div
                className="col-4"
                style={{ maxWidth: "128px", maxHeight: "128px" }}
              >
                <img
                  src={Instagram6}
                  alt="Instagram 6"
                  style={{ width: "128px" }}
                  className="img-fluid h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid news pt-5">
        <div className="row">
          <div className="col-md-6 col-12 pl-5">
            <h4 className="primary-color font-roboto m-0 p-0">
              Need Help? Call Our Award-Warning
            </h4>
            <p className="m-0 p-0 text-secondary">
              Support Team 24/7 <br /> At (844) 5555-8324
            </p>
          </div>
          <div className="col-md-4 col-12 my-md-0 my-3 pl-md-0 pl-5">
            <input
              type="text"
              className="form-control border-0 bg-light"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="col-md-2 col-12 my-md-0 my-3 pl-md-0 pl-5">
            <button className="btn bg-primary-color text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <p className="pt-5">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img src={Payment} alt="payment image" className="img-fluid" />
        </p>
        <small className="text-secondary py-4">
          Daily Tuition © 2019 Tutorial Store. All Rights Reserved. Designed by
          Daily Tuition.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
