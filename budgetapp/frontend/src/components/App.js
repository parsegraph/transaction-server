import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./layout/navbar/Navbar";
import Login from ".//layout/pages/Login";
import Accounts from "./layout/pages/Accounts";
import "./layout/styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Login />
      <div>
        <Route exact path="/account" component={Accounts} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
