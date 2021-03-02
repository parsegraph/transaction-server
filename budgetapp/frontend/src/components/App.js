import React, {useReducer, useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./layout/navbar/Navbar";
import Login from ".//layout/pages/Login";
import Accounts from "./layout/pages/Accounts";
import Transactions from "./layout/pages/Transactions";
import "./layout/styles/App.css";
import SignUp from "./layout/pages/SignUp";
import api from '../requests';

function useLogin(){
  const emptyLogin = {user:null, token:null};
  const [login, setLogin] = useState(api.loadLogin() || emptyLogin);
  return [login, (login) => setLogin(state => {
    if (!login) {
      return {user:null, token:null};
    } else {
      return {...login};
    }
  })];
}

function App() {
  const [login, setLogin] = useLogin();

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
          <Route exact strict path="/">
            <SignUp dispatch={setLogin}/>
          </Route>
          <Route exact strict path="/auth/user" component={Login} />
        </Switch>
      </main>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
