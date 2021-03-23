import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Login.css";
import { login } from "../../../redux/actions/signUpActions";

function Login() {

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password1: ""
  })

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser(user => ({ ...user, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      user.username = user.email;
      user.password = user.password1;
      dispatch(login(user));
  }

  return (
    <div className="form-main">
      <h2>Login</h2>
      <span className="form-error"></span>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>E-mail:</label>
          <input className="form-control" type="email" name="email" onChange={onChange} defaultValue={user.email}/>
          <span id="email-error" className="error"></span>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" name="password1" onChange={onChange} defaultValue={user.password1}/>
          <span id="password1-error" className="error"></span>
        </div>
        <div className="form-group form-buttons" style={{marginBottom:0}}>
          <button className="btn btn-secondary">Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
