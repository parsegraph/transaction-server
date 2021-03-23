import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import "./Navbar.css";
import { connect } from "react-redux";
import { logout } from "../../../redux/actions/signUpActions";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  
  state = { hasUserSession: null, clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
    
  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState({ clicked: false });
    });
  }

  componentWillUnmount() {
      this.unlisten();
  }

  componentDidUpdate() {
    if (this.state.hasUserSession !== this.props.hasUserSession) {
      this.setState({hasUserSession:this.props.hasUserSession, clicked: false});
    }
  }

  render() {
    const hasUserSession = this.props.hasUserSession;
  
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
            if (item.userOnly && !hasUserSession) {
              return;
            }
            if (item.anonymousOnly && hasUserSession) {
              return;
            }
            if(item.func) {
              return item.func(item, index, this.props.logout);
            }
            return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    hasUserSession:state.signup.hasUserSession
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
