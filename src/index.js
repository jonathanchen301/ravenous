/** I will become the best full-stack engineer the world has ever seen. */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Business from './Components/Business/business';
// import { BusinessClass } from './Components/Business/business.js';
// import Dominos from './Components/Business/dominos.webp';
import BusinessGrid from './Components/BusinessGrid/BusinessGrid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Business props={business} /> */}
    <BusinessGrid />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
