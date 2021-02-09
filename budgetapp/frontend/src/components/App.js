import React, { Component, Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";

import { Navbar } from "./layout/navbar/Navbar";
import "./layout/styles/App.css";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
