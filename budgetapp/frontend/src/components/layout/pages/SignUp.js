import React, { useState, useReducer, useEffect } from "react";
import { useDispatch } from 'react-redux';
import "../styles/Login.css";
import api from "../../../requests.js";
import $ from "jquery";
import { useHistory } from "react-router-dom";
import { SAVE_LOGIN } from '../../../redux/actions/types'

const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export {useSignUpForm};

function SignUp(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const {handleSubmit, handleInputChange, inputs} = useSignUpForm(()=>{
    $('#form-error').text("");
    "email password1 password2".split(" ").forEach((name)=>{
      $(`#${name}-error`).text("");
    })
    if (inputs.password1 !== inputs.password2) {
      $("#password2-error").text("Passwords don't match!");
      return;
    }
    api.createUser(inputs.email, inputs.email, inputs.password1).then((resp)=>{
      //console.log(resp);
      //console.log(resp.data);
      //api.saveLogin(resp.data);
      dispatch({type:SAVE_LOGIN, payload:resp.data});
      history.replace('/');
    }).catch((err)=>{
      console.log(err);
      if (typeof(err) === "object" && err.response && typeof(err.response.data) === "object") {
        for (let key in err.response.data) {
          if (!Object.prototype.hasOwnProperty.call(err.response.data, key)) {
            continue;
          }
          $(`#${key === "username" ? "email" : key}-error`).text(err.response.data[key]);
        }
      } else if (err) {
        $('#form-error').text(err);
      } else {
        $('#form-error').text("Error while signing up!");
      }
    });
  });

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

  const onChange = handleInputChange;

  return (
    <div className="form-main">
      <h2>SignUp</h2>
      <span className="form-error"></span>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>E-mail:</label>
          <input className="form-control" type="email" name="email" onChange={onChange} defaultValue={inputs.email}/>
          <span id="email-error" className="error"></span>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" name="password1" onChange={onChange} defaultValue={inputs.password1}/>
          <span id="password1-error" className="error"></span>
        </div>
        <div className="form-group">
          <label>Re-Enter Password:</label>
          <input className="form-control" type="password" name="password2" onChange={onChange} defaultValue={inputs.password2}/>
          <span id="password2-error" className="error"></span>
        </div>
        <div className="form-group form-buttons" style={{marginBottom:0}}>
          <button className="btn btn-secondary">Sign-Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
