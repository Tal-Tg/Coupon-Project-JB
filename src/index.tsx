import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Hero from './Components/Hero';
import { Products } from './Components/Products';

import { GlobalStyle } from './globalStyle';
import Feature from './Components/Feature';
import Routing from './Components/Router/router';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
