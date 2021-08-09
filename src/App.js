import logo from "./logo.svg";
import "./App.css";
import Home from "./Shoping/Home";
import HomeScreen from "./Shoping/HomeScreen";
import { useHistory } from "react-router-dom";
import store from "./Shoping/ShopStore";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function App(props) {
  var loggedUser = props.location.state;
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          VOGUER ..{" "}
          <span className="header-text">
            <i>Your perfect shopping partner</i>
          </span>
          <span>
            {" "}
            {loggedUser && (
              <span className="logout">
                <Link to={{ pathname: "/" }}>
                  <span>Logout</span>
                </Link>
              </span>
            )}
          </span>
        </h3>
        {/* <span>{store.getState().loggedin && <a>Logout</a>}</span> */}
      </header>
      <div className="App-body">
        {loggedUser && <Home />}
        {/* <Home/> */}
        {!loggedUser && <HomeScreen></HomeScreen>}
      </div>
    </div>
  );
}

export default App;
