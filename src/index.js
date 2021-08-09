import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from 'react-router-dom'
import ProductDetails from './Shoping/ProductDetails';
import Checkout from './Shoping/Checkout'
import HomeScreen from './Shoping/HomeScreen'
import Home from './Shoping/Home'
const routs = (
  < BrowserRouter >
     <div>
        <Route exact path="/" component={App} />
        <Route path="/productDetails" component={ ProductDetails } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/home" component={ Home } />
    
     </div>
  </ BrowserRouter >
);
ReactDOM.render(
  routs,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
