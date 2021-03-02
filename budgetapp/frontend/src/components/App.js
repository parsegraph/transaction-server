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

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

function App() {
  const [login, dispatch] = useReducer(api.loginReducer, {});
  const forceUpdate = useForceUpdate();

  const onSignup = (action)=>{
    dispatch(action);
    forceUpdate();
  }

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
            <SignUp dispatch={onSignup}/>
          </Route>
          <Route exact strict path="/auth/user" component={Login} />
        </Switch>
      </main>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
