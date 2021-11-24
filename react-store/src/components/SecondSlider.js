import React, { useEffect, useState } from "react";

import Carousel from "./Carousel/Carousel";
import Product1 from "../assets/images/id-9-cat-1.jpg";
import Product2 from "../assets/images/id-9-cat-2.jpg";
import Product3 from "../assets/images/id-9-cat-3.jpg";
import Product4 from "../assets/images/id-9-cat-4.jpg";
import Product5 from "../assets/images/id-9-cat-5.jpg";

const SecondSlider = ({ viewportWidth }) => {
  const [itemsToShow, setItemsToShow] = useState(1);

  const items = [
    {
      img: Product1,
      alt: "Product 1",
      category: "SOFA & CHAIRS",
    },
    {
      img: Product2,
      alt: "Product 2",
      category: "FURNITURE & DECOR",
    },
    {
      img: Product3,
      alt: "Product 3",
      category: "LAMP & LIGHTING",
    },
    {
      img: Product4,
      alt: "Product 4",
      category: "SOUND & LIFE",
    },
    {
      img: Product5,
      alt: "Product 5",
      category: "APPLIANCES",
    },
    {
      img: Product3,
      alt: "Product 3",
      category: "LAMP & LIGHTING",
    },
  ];

  useEffect(() => {
    if (`${viewportWidth}` >= 1200) {
      setItemsToShow(5);
    } else if (`${viewportWidth}` >= 992) {
      setItemsToShow(4);
    } else if (`${viewportWidth}` >= 768) {
      setItemsToShow(3);
    } else if (`${viewportWidth}` >= 576) {
      setItemsToShow(2);
    } else {
      setItemsToShow(1);
    }
  }, [viewportWidth]);

  return (
    <div className="container-fluid g-0">
      <div className="site-slider-two">
        <div className="row row-cols-auto slider-two text-center g-0">
          {/* items: */}
          <Carousel
            show={itemsToShow}
            infiniteLoop
            renderPreviousButton={(previousItem, defaultClass) => (
              <button
                onClick={previousItem}
                className={`${defaultClass} btn btn-primary`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
            )}
            renderNextButton={(nextItem, defaultClass) => (
              <button
                onClick={nextItem}
                className={`${defaultClass} btn btn-primary`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            )}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="col-auto col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-5 product pt-md-5 pt-4"
              >
                <img
                  src={item.img}
                  className="all-product-img"
                  alt={item.alt}
                />
                <span className="border site-btn btn-span">
                  {item.category}
                </span>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SecondSlider;
