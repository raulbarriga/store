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
          <div className="col-md-4 col-sm-6">
            <h3 className="text-secondary text-center">New Arrivals</h3>
            <div className="row flex-column flex-xl-row py-3">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border">
                  <img src={Image1} alt="Product 1" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto px-xl-4">
                <div className="pt-4 pt-xl-0">
                  <h6 className="text-center text-xl-start">
                    Vinyl Top Folding Table
                  </h6>
                  <div className="rating pb-2 ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <h5 className="ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <small>
                      <s className="text-secondary">$125.99</s>
                    </small>{" "}
                    <span className="text-color">$120</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row flex-column flex-xl-row py-3">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border">
                  <img src={Image5} alt="Product 5" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto px-xl-4">
                <div className="pt-4 pt-xl-0">
                  <h6 className="text-center text-xl-start">
                    Parsons Modern End Black
                  </h6>
                  <div className="rating pb-2 ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h5 className="ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <small>
                      <s className="text-secondary">$159.99</s>
                    </small>{" "}
                    <span className="text-color">$240</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row flex-column flex-xl-row py-3">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border">
                  <img src={Image2} alt="Product 2" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto px-xl-4">
                <div className="pt-4 pt-xl-0">
                  <h6 className="text-center text-xl-start">
                    Ikea RUSCH 25x4 Wall
                  </h6>
                  <div className="rating pb-2 ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h5 className="ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <span className="text-color">$103</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <h3 className="text-secondary text-center">Bestseller</h3>
            <div className="row flex-column flex-xl-row py-3">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border">
                  <img src={Image5} alt="Product 5" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto px-xl-4">
                <div className="pt-4 pt-xl-0">
                  <h6 className="text-center text-xl-start">
                    Parsons Modern End Black
                  </h6>
                  <div className="rating pb-2 ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h5 className="ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <small>
                      <s className="text-secondary">$159.99</s>
                    </small>{" "}
                    <span className="text-color">$240</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row flex-column flex-xl-row py-3">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border">
                  <img src={Image4} alt="Product 4" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto px-xl-4">
                <div className="pt-4 pt-xl-0">
                  <h6 className="text-center text-xl-start">
                    Table Lamp Bedside Desk
                  </h6>
                  <div className="rating pb-2 ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h5 className="ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <small>
                      <s className="text-secondary">$449.99</s>
                    </small>{" "}
                    <span className="text-color">$469.99</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row flex-column flex-xl-row py-3">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border">
                  <img src={Image2} alt="Product 2" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto px-xl-4">
                <div className="pt-4 pt-xl-0">
                  <h6 className="text-center text-xl-start">
                    Ikea RUSCH 25x4 Wall
                  </h6>
                  <div className="rating pb-2 ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h5 className="ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <span className="text-color">$103</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <h3 className="text-secondary text-center">Featured</h3>
            <div className="row flex-column flex-xl-row py-3">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border">
                  <img src={Clock} alt="Clock" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto">
                <div className="pt-4 pt-xl-0">
                  <h6 className="text-center text-xl-start">
                    Large Wall Clock Sticker
                  </h6>
                  <div className="rating pb-2 ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <h5 className="ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <small>
                      <s className="text-secondary">$219.99</s>
                    </small>{" "}
                    <span className="text-color">$210.99</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row flex-column flex-xl-row py-3">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border">
                  <img src={Sofa} alt="Sofa" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto px-xl-4">
                <div className="pt-4 pt-xl-0">
                  <h6 className="text-center text-xl-start">
                    Upholstered Fabric Sofa
                  </h6>
                  <div className="rating pb-2 ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <h5 className="ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <small>
                      <s className="text-secondary">$519.99</s>
                    </small>{" "}
                    <span className="text-color">$499.00</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="row flex-column flex-xl-row py-3">
              <div className="col-md-3 p-0 mx-auto">
                <div className="items border">
                  <img src={Image1} alt="Product 1" className="img-fluid" />
                </div>
              </div>
              <div className="description-box col-md-9 p-0 py-4 py-md-0 mx-auto px-xl-4">
                <div className="pt-4 pt-xl-0">
                  <h6 className="text-center text-xl-start">
                    Vinyl Top Folding Table
                  </h6>
                  <div className="rating pb-2 ps-4 ms-2 ps-xl-0 ms-xl-0">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h5 className="ps-4 ms-2 ps-xl-0 ms-xl-0">
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
