import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./layout/navbar/Navbar";
import Login from "./layout/pages/Login";
import Accounts from "./layout/pages/Accounts";
import SignUp from "./layout/pages/SignUp";
import "./layout/styles/App.css";

import store from "../redux/store";

import {SharedRoute} from './SharedRoute';



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Switch>
          <SharedRoute exact strict path='/' userComponent={Accounts} component={SignUp}/>
          <Route exact strict path="/auth/user/login" component={Login} />
          <Redirect from="*" to="/"/>
        </Switch>
      </main>
    </>
  );
}

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById("app"));
