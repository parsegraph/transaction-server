import React, { useState, useEffect } from "react";
import "../styles/Login.css";
// import api from "../../../requests.js";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   api
  //     .getUser()
  //     .then((res) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const onSubmit = (event)=>{
    if (event) {
      event.preventDefault();
    }
    history.replace('/auth/user');
  };

  return (
    <div className="form-main">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="form">
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
