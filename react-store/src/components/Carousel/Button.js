import React from "react";

const Button = ({ type, children }) => {
  const myClass = `my-carousel-btn ${type}`;

  const handleClick = () => {
    //logic here…..
  };

  return (
    <button className={myClass} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
