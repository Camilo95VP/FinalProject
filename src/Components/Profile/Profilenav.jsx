import React, { Component } from 'react'
import cabezarobot from '../../Images/cabezarobot.png'
import './Profile.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faUser } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas, faUser)

class Profilenav extends Component {
    render() {
        return (
            <>
            <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="!#" rel="noopener noreferrer"> 
                    <img id="mini" src={cabezarobot} alt="cabeza robot"/>
                    </a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="!#" rel="noopener noreferrer">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item" id="user1" href="!#" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faUser}/>
                        { this.props.user && this.props.user }
                    </a>
        <a className="navbar-item" id="grado" href="!#" rel="noopener noreferrer">{this.props.degree} º</a>
                    </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <button className="button is-primary">Activo</button>
                        <button className="button is-light" onClick={this.props.close}>Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
        )
    }
}
export default withRouter(Profilenav);
