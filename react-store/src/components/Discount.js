import React from "react";

import Sofa from "../assets/images/1_11.jpg";
// import Chair1 from "../assets/images/3_20.jpg";
// import Chair2 from "../assets/images/6_19.jpg";
// import Clock from "../assets/images/8_20.jpg";

const Discount = () => {
  return (
    <div id="discount" className="container-fluid sofa bg-light">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="row box">
            <div className="col-md-auto p-0 pl-md-3 bg-white offset-lg-1 d-flex flex-md-column flex-sm-row justify-content-center">
              <div className="time px-3 py-md-2 py-2 mt-3 bg-white border text-center">
                <h5 className="primary-color">
                  <strong>125</strong>
                </h5>
                <em>Days</em>
              </div>
              <div className="time px-3 py-md-2 py-2 mt-3 bg-white border text-center">
                <h5 className="primary-color">
                  <strong>5</strong>
                </h5>
                <em>Hours</em>
              </div>
              <div className="time px-3 py-md-2 py-2 mt-3 bg-white border text-center">
                <h5 className="primary-color">
                  <strong>45</strong>
                </h5>
                <em>Mins</em>
              </div>
              <div className="time px-3 py-md-2 py-2 mt-3 bg-white border text-center">
                <h5 className="primary-color">
                  <strong>13</strong>
                </h5>
                <em>Secs</em>
              </div>
            </div>
            <div className="col-md-8 p-0 bg-white">
              <div className="text-left img-container">
                <img src={Sofa} alt="Sofa" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="second-col col-md-6 col-12 pt-5">
          <h4 className="text-left">Upholstered Fabric Sofa</h4>
          <p className="text-secondary">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
              nisi vitae suscipit tellus mauris a. Semper viverra nam libero
              justo laoreet sit.
            </small>
          </p>
          <div className="rating lightblue">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4 className="pt-2">
            <small>
              <s className="text-secondary">$519.99</s>
            </small>
            {" "}
            <span className="text-color">$499.00</span>
          </h4>
          <div className="cart mt-4 row">
            <div className="col-md-4 col-sm-12 p-0">
              <button className="border site-btn btn-span bg-primary-color text-white">
                Add to Cart
              </button>
            </div>
            <div className="icon-container col-md-5 col-sm-12 p-0 d-flex justify-content-center my-3 my-md-0">
              <span className="span-btns p-3 bg-white border rounded-circle d-flex justify-content-center align-items-center mx-2">
                <i className="far fa-heart"></i>
              </span>
              <span className="span-btns p-3 bg-white border rounded-circle d-flex justify-content-center align-items-center mx-2">
                <i className="fas fa-sync-alt"></i>
              </span>
              <span className="span-btns p-3 bg-white border rounded-circle d-flex justify-content-center align-items-center mx-2">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
