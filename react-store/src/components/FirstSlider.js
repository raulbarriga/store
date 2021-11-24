import React from 'react';

import Banner1 from "../assets/images/item-1.jpg";
import Banner2 from "../assets/images/item-2.jpg";
import Banner3 from "../assets/images/item-3.jpg";

const FirstSlider = () => {
    return (
        <div
          id="Banner-Carousel"
          className="carousel slide carousel-dark pointer-even d-none d-md-block"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#Banner-Carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#Banner-Carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#Banner-Carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Banner1} className="d-block w-100" alt="Banner 1" />
            </div>
            <div className="carousel-item">
              <img src={Banner2} className="d-block w-100" alt="Banner 2" />
            </div>
            <div className="carousel-item">
              <img src={Banner3} className="d-block w-100" alt="Banner 3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-slide="prev"
            data-bs-target="#Banner-Carousel"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-slide="next"
            data-bs-target="#Banner-Carousel"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    )
}

export default FirstSlider
