import React from "react";
import { logout } from "../../../redux/actions/signUpActions";

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
  },
  {
    title: "Logout",
    url: "/api/auth/logout",
    cName: "navbar-links",
    func: (item, index, logout) => {return <li key={index}>
    <a className={item.cName} onClick={logout}>
      {item.title}
    </a>
  </li>}
  },
];
