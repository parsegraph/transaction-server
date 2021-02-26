import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import api from "../../../requests.js";

function Login() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .getUser()
      .then((res) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="form-main">
      <h2>Login</h2>
      <form className="form">
        <div className="form-group">
          <label>Name: </label>
          <input className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input className="form-control" type="text" />
        </div>
        <div className="form-group form-buttons" style={{marginBottom:0}}>
          <button className="btn btn-primary">Login</button>&nbsp;
          <button className="btn btn-secondary">Sign-Up</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
