import React from 'react';
import ReactDOM from 'react-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/@popperjs/core/dist/umd/popper.min.js";
import './components/Carousel/carousel.css';
import './css/style.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
