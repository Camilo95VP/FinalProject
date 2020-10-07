import React, { Component } from 'react'
import cabezarobot from '../../Images/cabezarobot.png'
import './Home.css'
import 'bulma/css/bulma.css';
import { withRouter } from "react-router-dom"
import {Link} from "react-router-dom"
class HomeNav extends Component {
    close = () => {
        localStorage.removeItem("auth");
        this.props.history.replace("/")
    }
    render() {
        return (
        <>
            <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                    <img id="mini" src={cabezarobot} />
                    </a>
                    <ul>
                        <li><Link to="/Home">Inicio</Link></li>
                        <li><Link to="/Docentes">Docentes</Link></li>
                        <li><Link to="/AulaVirtual">Aula Virtual</Link></li>
                    </ul>
                </div> 
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <button className="button is-primary">Activo</button>
                        <button className="button is-light" onClick={this.close}>Cerrar Sesión</button>
                        </div>
                    </div>
                </div>   
            </nav>
        </>
        )
    }
}
export default withRouter(HomeNav);
