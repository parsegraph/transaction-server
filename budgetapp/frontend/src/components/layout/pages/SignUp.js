import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { saveLogin } from '../../../redux/actions/signUpActions';




function SignUp() {

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  })

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser(user => ({ ...user, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      user.username = user.email;
      user.password = user.password1;
      if(user.password1 !== user.password2) {
        return
      } 
      dispatch(saveLogin(user));
  }


  return (
    <div className="form-main">
      <h2>SignUp</h2>
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
        <div className="form-group">
          <label>Re-Enter Password:</label>
          <input className="form-control" type="password" name="password2" onChange={onChange} defaultValue={user.password2}/>
          <span id="password2-error" className="error"></span>
        </div>
        <div className="form-group form-buttons" style={{marginBottom:0}}>
          <Link className="btn btn-secondary" to="/login">Login</Link>
        </div>
        <div className="form-group form-buttons" style={{marginBottom:0}}>
          <button className="btn btn-secondary">Sign-Up</button>
        </div>4
      </form>
    </div>
  );
}

export default SignUp;
