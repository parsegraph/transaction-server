import React, {useEffect, useReducer, useState} from "react";
import ReactDOM from "react-dom";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider, useDispatch, connect } from "react-redux";

import { Navbar } from "./layout/navbar/Navbar";
import Login from ".//layout/pages/Login";
import Accounts from "./layout/pages/Accounts";
import "./layout/styles/App.css";
import SignUp from "./layout/pages/SignUp";

import store from "../redux/store";

import { createBrowserHistory } from 'history';

import {PrivateRoute} from './PrivateRoute';

export const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
        <Navbar />
        <main>
          <Switch>
            <PrivateRoute exact strict path="/" component={Accounts} />
            <Route exact strict path="/auth/user" component={Login} />
            <Route exact strict path='/signup' component={SignUp} />
            <Redirect from="*" to="/signup"/>
          </Switch>
        </main>
      </Router>
  );
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
