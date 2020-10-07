import React, { Component } from "react";
import cabezarobot from "../Images/cabezarobot.png";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Shared/Navbar.css"
// library.add(fas, faUser);

class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar"
          id="navbar"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img id="mini" src={cabezarobot} />
            </a>
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" id="user1">
                <FontAwesomeIcon icon={faUser} id="user"/>
                {this.props.user && this.props.user}
              </a>
              <a className="navbar-item" id="grado">
                {this.props.degree} º
              </a>
              <a className="navbar-item" id="grado">
                {this.props.badge} 
              </a>
              <a className="navbar-item" id="grado">
                {this.props.trophy} 
              </a>
              {/* <img src={this.props.img}/> */}
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button className="button is-primary">
                    Puntos: {this.props.score}
                  </button>
                  <button className="button is-light" onClick={this.props.close}>
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default withRouter(Navbar);
