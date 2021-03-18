import React, {useEffect, useReducer, useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, useDispatch, connect } from "react-redux";

import { Navbar } from "./layout/navbar/Navbar";
import Login from ".//layout/pages/Login";
import Accounts from "./layout/pages/Accounts";
import Transactions from "./layout/pages/Transactions";
import "./layout/styles/App.css";
import SignUp from "./layout/pages/SignUp";
import api from '../requests';

import store from "../redux/store";
import { loadLogin } from "../redux/actions/signUpActions";

// function useLogin(){
//   const emptyLogin = {user:null, token:null};
//   const [login, setLogin] = useState(api.loadLogin() || emptyLogin);
//   return [login, (login) => setLogin(state => {
//     if (!login) {
//       return {user:null, token:null};
//     } else {
//       return {...login};
//     }
//   })];
// }

function App({signup}) {
  console.log(signup);

  if (signup.user) {
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
            <Route exact strict path="/">
              <SignUp/>
            </Route>
            <Route exact strict path="/auth/user" component={Login} />
          </Switch>
        </main>
      </Router>
  );
}

const mapStateToProps = (state) => ({
  signup: state.signup
});

App = connect(mapStateToProps, null)(App);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));
