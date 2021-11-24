// from https://dev.to/rakumairu/how-to-show-multiple-item-in-simple-react-carousel-32dd
// and infinite loop from https://dev.to/rakumairu/how-to-handle-infinite-loop-in-react-carousel-43ae
import React, { useState, useEffect } from "react";

// import useEvent from "../../hooks/useEvent";
// import Button from "./Button";



// export Button;

const Carousel = ({ children, show, infiniteLoop, className }) => {
  const myClass = `carousel-container ${className}`
  
//   export const Button = ({ type, children }) => {
//   const myClass = `my-carousel-btn ${type}`;

//   const handleClick = () => {
//     //logic here…..
//   };

//   return (
//     <button className={myClass} onClick={handleClick}>
//       {children}
//     </button>
//   );
// };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // for the carousel keyboard controls
//   const ARROWLEFT_KEYS = ["37", "ArrowLeft"];
//   const ARROWRIGHT_KEYS = ["39", "ArrowRight"];

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = (e) => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = (e) => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

//   const keypressHandler = ({ key }) => {
//     // e = e || window.event;
//     if (ARROWLEFT_KEYS.includes(String(key))) {
//       // setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1); //left <- show Prev image
//       prev();
//       // console.log("Left key pressed!");
//     }
//     if (ARROWRIGHT_KEYS.includes(String(key))) {
//       // right -> show next image
//       // setCurrentImg(currentImg + 1);
//       next();
//       // console.log("Right key pressed!");
//     }
//   };

//   useEvent("keydown", keypressHandler);

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }
    return output;
  };
console.log("currentIndex: ", currentIndex);
  return (
    <div className={myClass}>
      <div className="carousel-wrapper">
        {/* You can alwas change the content of the button to other things */}
        {/* <button onClick={prev} className="left-arrow">
          &lt;
        </button> */}
        <button
        onClick={(e) => prev(e)}
            className="btn btn-primary"
            type="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            {/* <span className="visually-hidden">Previous</span> */}
          </button>
          {/* <Button>

          </Button> */}
          <button
          onClick={(e) => next(e)}
            className="btn btn-primary"
            type="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            {/* <span className="visually-hidden">Next</span> */}
          </button>

        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? "none" : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
          </div>
        </div>
        {/* You can alwas change the content of the button to other things */}
        {/* <button onClick={next} className="right-arrow">
          &gt;
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;
