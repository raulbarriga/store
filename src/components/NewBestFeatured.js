import React from "react";

import Image1 from "../assets/images/15_3.jpg";
import Image2 from "../assets/images/9_21.jpg";
import Image4 from "../assets/images/12_16.jpg";
import Image5 from "../assets/images/11_18.jpg";
import Sofa from "../assets/images/1_11.jpg";
import Clock from "../assets/images/8_20.jpg";

const NewBestFeatured = () => {
  return (
    <div id="newBestFeatured" className="container-fluid container-lg my-5">
      <div className="newseller">
        <div className="d-flex flex-row flex-wrap justify-content-center">

          <div className="col-12 col-md-4">
            <h3 className="text-secondary text-center">New Arrivals</h3>

            <div className="my-card mx-xs-auto w-100 row d-sm-inline-flex d-md-flex flex-column flex-xl-row py-3 pe-sm-2">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border text-center">
                  <img src={Image1} alt="Product 1" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto">
                <div className="pt-4">
                  <h6 className="text-center">
                    Vinyl Top Folding Table
                  </h6>
                  <div className="text-center rating pb-2">
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star-half-alt"></i>
                  </div>
                  <h5 className="text-center ps-4 price price ms-2 ms-xl-0">
                    <small>
                      <s className="text-secondary">$125.99</s>
                    </small>{" "}
                    <span className="text-color">$120</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="my-card mx-xs-auto w-100 row d-sm-inline-flex d-md-flex flex-column flex-xl-row py-3 ps-sm-2">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border text-center">
                  <img src={Image5} alt="Product 5" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto">
                <div className="pt-4">
                  <h6 className="text-center">
                    Parsons Modern End Black
                  </h6>
                  <div className="text-center rating pb-2">
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                  </div>
                  <h5 className="text-center price">
                    <small>
                      <s className="text-secondary">$159.99</s>
                    </small>{" "}
                    <span className="text-color">$240</span>
                  </h5>
                </div>
              </div>
            </div> 

            <div className="my-card mx-xs-auto w-100 row d-sm-inline-flex d-md-flex flex-column flex-xl-row py-3 pe-sm-2">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border text-center">
                  <img src={Image2} alt="Product 2" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto">
                <div className="pt-4">
                  <h6 className="text-center">
                    Ikea RUSCH 25x4 Wall
                  </h6>
                  <div className="text-center rating pb-2">
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                  </div>
                  <h5 className="text-center price">
                    <span className="text-color">$103</span>
                  </h5>
                </div>
              </div>
            </div>

          </div>

          <div className="col-12 col-md-4">
            <h3 className="text-secondary text-center">Bestseller</h3>

            <div className="my-card mx-xs-auto w-100 row d-sm-inline-flex flex-column flex-xl-row py-3 pe-sm-2">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border text-center">
                  <img src={Image5} alt="Product 5" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto">
                <div className="pt-4">
                  <h6 className="text-center">
                    Parsons Modern End Black
                  </h6>
                  <div className="text-center rating pb-2">
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                  </div>
                  <h5 className="text-center price">
                    <small>
                      <s className="text-secondary">$159.99</s>
                    </small>{" "}
                    <span className="text-color">$240</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="my-card mx-xs-auto w-100 row d-sm-inline-flex flex-column flex-xl-row py-3 ps-sm-2">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border text-center">
                  <img src={Image4} alt="Product 4" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto">
                <div className="pt-4">
                  <h6 className="text-center">
                    Table Lamp Bedside Desk
                  </h6>
                  <div className="text-center rating pb-2">
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                  </div>
                  <h5 className="text-center price">
                    <small>
                      <s className="text-secondary">$449.99</s>
                    </small>{" "}
                    <span className="text-color">$469.99</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="my-card mx-xs-auto w-100 row d-sm-inline-flex flex-column flex-xl-row py-3 pe-sm-2">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border text-center">
                  <img src={Image2} alt="Product 2" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto">
                <div className="pt-4">
                  <h6 className="text-center">
                    Ikea RUSCH 25x4 Wall
                  </h6>
                  <div className="text-center rating pb-2">
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                  </div>
                  <h5 className="text-center price">
                    <span className="text-color">$103</span>
                  </h5>
                </div>
              </div>
            </div>

          </div>

          <div className="col-12 col-md-4">
            <h3 className="text-secondary text-center">Featured</h3>

            <div className="my-card mx-xs-auto w-100 row d-sm-inline-flex flex-column flex-xl-row py-3 pe-sm-2">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border text-center">
                  <img src={Clock} alt="Clock" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto">
                <div className="pt-4">
                  <h6 className="text-center">
                    Large Wall Clock Sticker
                  </h6>
                  <div className="text-center rating pb-2">
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star-half-alt"></i>
                  </div>
                  <h5 className="text-center price">
                    <small>
                      <s className="text-secondary">$219.99</s>
                    </small>{" "}
                    <span className="text-color">$210.99</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="my-card mx-xs-auto w-100 row d-sm-inline-flex flex-column flex-xl-row py-3 ps-sm-2">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border text-center text-center">
                  <img src={Sofa} alt="Sofa" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto">
                <div className="pt-4">
                  <h6 className="text-center">
                    Upholstered Fabric Sofa
                  </h6>
                  <div className="text-center rating pb-2">
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star-half-alt"></i>
                  </div>
                  <h5 className="text-center price">
                    <small>
                      <s className="text-secondary">$519.99</s>
                    </small>{" "}
                    <span className="text-color">$499.00</span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="my-card mx-xs-auto w-100 row d-sm-inline-flex flex-column flex-xl-row py-3 pe-sm-2">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border text-center text-center">
                  <img src={Image1} alt="Product 1" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto">
                <div className="pt-4">
                  <h6 className="text-center">
                    Vinyl Top Folding Table
                  </h6>
                  <div className="text-center rating pb-2">
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                    <i className="fs-6 fas fa-star"></i>
                  </div>
                  <h5 className="text-center price">
                    <small>
                      <s className="text-secondary">$125.99</s>
                    </small>{" "}
                    <span className="text-color">$120</span>
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBestFeatured;
