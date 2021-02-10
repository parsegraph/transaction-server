import React, { Component, Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./layout/navbar/Navbar";
import Accounts from "./layout/pages/Accounts";
import "./layout/styles/App.css";

import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accounts />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
