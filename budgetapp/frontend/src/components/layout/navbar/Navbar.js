import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import "./Navbar.css";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/signUpActions";

class Navbar extends Component {
  
  state = { clicked: false };
  
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <i className="fas fa-cash-register"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            if(item.func) {
              return item.func(item, index, this.props.logout);
            }
            return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
            );
          })}
          <li>
            <Button className="nav-signup">Sign Up</Button>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};
export default connect(null, mapDispatchToProps)(Navbar);
