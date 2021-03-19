import React, {useEffect, useReducer, useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch, useHistory } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

import { Navbar } from "./layout/navbar/Navbar";
import Login from "./layout/pages/Login";
import Accounts from "./layout/pages/Accounts";
import "./layout/styles/App.css";
import SignUp from "./layout/pages/SignUp";

import store from "../redux/store";

import {PrivateRoute} from './PrivateRoute';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <PrivateRoute exact strict path="/" component={Accounts} />
          <Route exact strict path="/auth/user" component={Login} />
          <Route exact strict path='/signup' component={SignUp} />
          <Redirect from="*" to="/signup"/>
        </Switch>
      </main>
    </>
  );
}

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById("app"));
