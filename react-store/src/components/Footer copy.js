import React from "react";
//import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faTwitter,
    faFacebookF,
    faInstagram,
    faSkype,
    faPinterestP,
    faYoutube,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faPaperPlane, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import Instagram1 from '../assets/images/256_n.jpg';
import Instagram2 from '../assets/images/792_n.jpg';
import Instagram3 from '../assets/images/392_n.jpg';
import Instagram4 from '../assets/images/664_n.jpg';
import Instagram5 from '../assets/images/088_n.jpg';
import Instagram6 from '../assets/images/896_n.jpg';
import Payment from '../assets/images/payment.png';
//config.autoAddCss = false;

const Footer = () => {
    return (
      <footer>
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <h4>Contact Us</h4>
              <div className="row pl-md-1 text-secondary">
                <div className="col-12">
                  <FontAwesomeIcon className="fas px-md-2" icon={faHome} />
                  <small>No 40 Baria Street 133/2 New York City, NY</small>
                </div>
              </div>
              <div className="row pl-md-1 text-secondary py-3">
                <div className="col-12">
                  <FontAwesomeIcon className="fas px-md-2" icon={faPaperPlane} />
                  <small>www.dailywebtuition.com</small>
                </div>
              </div>
              <div className="row pl-md-1 text-secondary">
                <div className="col-12">
                  <FontAwesomeIcon className="fas px-md-2" icon={faPhoneVolume} />
                  <small>(800) 123456789</small>
                </div>
              </div>
              <div className="row social text-secondary">
                <div className="col-12 py-3">
                  <FontAwesomeIcon className="fab fixedWidth=true footer-icons" icon={faTwitter} />
                  <FontAwesomeIcon className="fab fixedWidth=true footer-icons" icon={faFacebookF} />
                  <FontAwesomeIcon className="fab fixedWidth=true footer-icons" icon={faInstagram} />
                  <FontAwesomeIcon className="fab fixedWidth=true footer-icons" icon={faSkype} />
                  <FontAwesomeIcon className="fab fixedWidth=true footer-icons" icon={faPinterestP} />
                  <FontAwesomeIcon className="fab fixedWidth=true footer-icons" icon={faYoutube} />
                  <FontAwesomeIcon className="fab fixedWidth=true footer-icons" icon={faLinkedinIn} />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <h4>Our Services</h4>
              <div className="d-flex flex-column pl-md-3">
                <small className="pt-0">New York</small>
                <small>London SF</small>
                <small>Cockfosters BP</small>
                <small>Los Angeles</small>
                <small>Chicago</small>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <h4>Extras</h4>
              <div className="d-flex flex-column pl-md-3">
                <small className="pt-0">About Store</small>
                <small>New Collection</small>
                <small>Contact Us</small>
                <small>Latest News</small>
                <small>Our Sitemap</small>
              </div>
            </div>
            <div className="col-md-2 follow-us col-sm-12">
              <h4>Follow Instagram</h4>
              <div className="d-flex flex-row">
                <img
                  src={Instagram1}
                  alt="Instagram 1"
                  className="img-fluid"
                />
                <img
                  src={Instagram2}
                  alt="Instagram 2"
                  className="img-fluid"
                />
                <img
                  src={Instagram3}
                  alt="Instagram 3"
                  className="img-fluid"
                />
              </div>
              <div className="d-flex flex-row">
                <img
                  src={Instagram4}
                  alt="Instagram 4"
                  className="img-fluid"
                />
                <img
                  src={Instagram5}
                  alt="Instagram 5"
                  className="img-fluid"
                />
                <img
                  src={Instagram6}
                  alt="Instagram 6"
                  className="img-fluid"
                />
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
                Support Team 24/7 At (844) 5555-8324
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
            <img
              src={Payment}
              alt="payment image"
              className="img-fluid"
            />
          </p>
          <small className="text-secondary py-4">
            Daily Tuition © 2019 Tutorial Store. All Rights Reserved. Designed
            by Daily Tuition.
          </small>
        </div>
      </footer>
    );
}

export default Footer;
