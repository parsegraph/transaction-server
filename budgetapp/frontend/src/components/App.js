import React, {useReducer} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./layout/navbar/Navbar";
import Login from ".//layout/pages/Login";
import Accounts from "./layout/pages/Accounts";
import Transactions from "./layout/pages/Transactions";
import "./layout/styles/App.css";
import SignUp from "./layout/pages/SignUp";
import api from '../requests';

function App() {
  const [login] = useReducer(api.loginReducer, {});

  if (login.user) {
    return (
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact strict path="/" component={Accounts} />
            <Route exact path="/transaction" component={Transactions} />
          </Switch>
        </main>
      </Router>
    );
  }

  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact strict path="/" component={SignUp} />
          <Route exact strict path="/auth/user" component={Login} />
        </Switch>
      </main>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
