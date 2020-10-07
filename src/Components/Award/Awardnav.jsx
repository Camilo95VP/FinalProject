import React, { Component } from 'react'
import cabezarobot from '../../Images/cabezarobot.png'
import { withRouter } from "react-router-dom"

class Awardnav extends Component {
   render() {
        return (
            <div>
                <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="!#" rel="noopener noreferrer">
                    <img id="mini" src={cabezarobot} alt="cabezarobot" />
                    </a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="!#">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item" id="user1" href="!#">
                    <i className="fas fa-user" id="user"></i>
                        { this.props.user && this.props.user }
                    </a>
                    <a className="navbar-item" id="grado" href="!#">Grado</a>
                    </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-primary">Puntos: {this.props.points}</button>
                        <button className="button is-light" onClick={this.props.close}>Cerrar Sesión</button> 
                    </div>
                </div>
            </div>
            </div>
        </nav>
    </div>
        )
    }
}
export default withRouter(Awardnav);
