import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./layout/navbar/Navbar";
import Login from ".//layout/pages/Login";
import Accounts from "./layout/pages/Accounts";
import Transactions from "./layout/pages/Transactions";
import "./layout/styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact strict path="/" component={Login} />
          <Route exact path="/account" component={Accounts} />
          <Route exact path="/transaction" component={Transactions} />
        </Switch>
      </main>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
