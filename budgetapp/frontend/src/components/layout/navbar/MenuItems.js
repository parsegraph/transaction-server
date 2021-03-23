import React from "react";
import { logout } from "../../../redux/actions/signUpActions";
import { Link } from 'react-router-dom';
import { Button } from "./Button";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "navbar-links",
  },
  {
    title: "Accounts",
    url: "/account",
    cName: "navbar-links",
    userOnly: true,
  },
  {
    title: "Log in",
    url: "/login",
    cName: "navbar-links",
    anonymousOnly: true,
  },
  {
    title: "Logout",
    url: "/api/auth/logout",
    cName: "navbar-links",
    userOnly: true,
    func: (item, index, logout) => {return <li key={index}>
    <a className={item.cName} onClick={logout}>
      {item.title}
    </a>
  </li>}
  },
  {
    title: "Sign up",
    anonymousOnly: true,
    func: (item, index) => {
      return (
        <li key={index}>
          <Link to="/signup"><Button className="nav-signup">Sign Up</Button></Link>
        </li>
      );
    }
  }
];
