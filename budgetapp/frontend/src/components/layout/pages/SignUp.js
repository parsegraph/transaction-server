import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import api from "../../../requests.js";

function SignUp() {
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

  onChange = () => {

  }

  onSubmit = () => {

  }

  return (
    <div className="form-main">
      <h2>SignUp</h2>
      <form className="form">
        <div className="form-group">
          <label>E-mail: </label>
          <input className="form-control" type="email" value="email"/>
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input className="form-control" type="text" value="password1"/>
        </div>
        <div className="form-group">
          <label>Re-Enter Password: </label>
          <input className="form-control" type="text" value="password2"/>
        </div>
        <div className="form-group form-buttons" style={{marginBottom:0}}>
          <button className="btn btn-secondary">Sign-Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
