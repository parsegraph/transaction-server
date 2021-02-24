import React from "react";
import "./Login.css";
// import Button from "../navbar/Button";

function Login() {
  return (
    <div className="form-main">
      <h2>Login</h2>
      <form>
        <div>
          <label>Name: </label>
          <input type="text" />
        </div>
        <div>
          <label>Password: </label>
          <input type="text" />
        </div>
        <div>
          <button className="btn">Login</button>
        </div>
        <div>
          <button className="btn">Sign-Up</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
