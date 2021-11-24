import React from "react";

const OurClient = () => {
  return (
    <div className="container-fluid p-0">
      <div className="slider-client">
        <div className="slider-box text-center">
          <h1 className="pt-5 font-roboto">What Our Clients Say?</h1>
          <div id="clientId" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* <div className="slider-six"> */}
              <div className="carousel-item active">
                <p className="d-block w-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  finibus gravida est nec tincidunt. Donec porttitor libero at
                  nisl posuere, eu hendrerit sem fermentum. Nam quis vestibulum
                  ex. Nunc eget auctor enim.
                </p>
                <h5 className="m-0">Akshay Kashyyap</h5>
                <small className="pb-1">CEO Daily Tuition</small>
              </div>
              <div className="carousel-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  finibus gravida est nec tincidunt. Donec porttitor libero at
                  nisl posuere, eu hendrerit sem fermentum. Nam quis vestibulum
                  ex. Nunc eget auctor enim.
                </p>
                <h5 className="m-0">Akshay Kashyyap</h5>
                <small className="pb-1">CEO Daily Tuition</small>
              </div>
              <div className="carousel-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  finibus gravida est nec tincidunt. Donec porttitor libero at
                  nisl posuere, eu hendrerit sem fermentum. Nam quis vestibulum
                  ex. Nunc eget auctor enim.
                </p>
                <h5 className="m-0">Akshay Kashyyap</h5>
                <small className="pb-1">CEO Daily Tuition</small>
              </div>
              <div className="carousel-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  finibus gravida est nec tincidunt. Donec porttitor libero at
                  nisl posuere, eu hendrerit sem fermentum. Nam quis vestibulum
                  ex. Nunc eget auctor enim.
                </p>
                <h5 className="m-0">Akshay Kashyyap</h5>
                <small className="pb-1">CEO Daily Tuition</small>
              </div>
              {/* </div> */}
            </div>
            <ul className="carousel-indicators">
              <li>
                <button
                  type="button"
                  data-bs-target="#clientId"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-target="#clientId"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-target="#clientId"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-target="#clientId"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
