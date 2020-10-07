import React, { Component } from "react";
import "./RegisterUser.css";
import "bulma/css/bulma.css";
import axios from "axios"
import swal from "sweetalert"
import robot3 from "../../Images/robot3.png";
import cabezarobot from "../../Images/cabezarobot.png";
import { library } from '@fortawesome/fontawesome-svg-core'
import {fab,faTwitter,faFacebook} from '@fortawesome/free-brands-svg-icons'
import { fas,faLock, faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from "react-router-dom";
library.add(fas, faLock,faUser)
library.add(fab, faLock,faUser,faEnvelope)

class Register extends Component {
   /*Definicion de datos para el estado*/
   state = {
    users: [],
    existsUser: null,
    newUser: {
      useremail:'',
      userpassword: '',
      userperfil: ''
    },
    userCreate: []
}
/*Obteniendo datos de la API por el metodo get*/
async componentDidMount() {
    const res = await axios.get("https://json-server-now.kira4489.vercel.app/users");
    this.setState({ users: res.data })
    console.log(this.state.users)
}
/*Array function, eventos y actualizacion del estado*/
handleChange = (e) => {
  this.setState({
    newUser: {
      ...this.state.newUser, 
      [e.target.name]: e.target.value
    }
  })
}
/*Peticion por metodo post para agregar usuarios usando axios*/
onSubmit = async e => {
  e.preventDefault();
  this.state.users.map(user => {
    if(user.useremail === this.state.newUser.useremail) {
      this.setState({ existsUser: true });
    }
  })

  if(this.state.existsUser) return;

  const {useremail, userpassword} = this.state.newUser;
    const res = await axios.post("https://json-server-now.kira4489.vercel.app/users", {
        user: useremail,
        password: userpassword,
        trophy: "bronce",
        badge: "beginner",
        degree: "10",
        score: 5000
    })
    this.setState({userCreate: res.data});
/*Alerta usando la dependencia sweetalert*/
    localStorage.setItem("auth", true);
    localStorage.setItem("user", this.state.userCreate.user)
    this.props.history.replace("/Profile");
    swal({
        title: `Bienvenid@ a EDDY: ${this.state.userCreate.user}`,
        text: `Usuario creado exitosamente`,
        icon: "success"
    });
}
  render() {
    return (
      <div className="columns is-centered" id="register">
        {this.state.existsUser && <p>Ya existe un usuario registrado</p>}
        <section className="column" id="column2">
          <img className="robot" src={robot3} alt="robot" />
          <h1 id="h1">E D D Y - A P P</h1>
          <h3 id="h3">Lo que quieras aprender con un solo click</h3>
          <span id="icons-login">
            <a
              href="https://www.facebook.com/Eddy-Software-Educativo-105583811295277"
              target="_blank" rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faFacebook} id="facebook"/>
            </a>
            <a href="https://twitter.com/SoftwareEddy" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} id="twitter"/>
            </a>
            <a href="mailto:eddysoftwareducativo@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} id="envelope"/>
            </a>
          </span>
        </section>
        <div className="column" id="column1">
          <img className="head" src={cabezarobot} alt="robot" />
          <form onSubmit={this.onSubmit}>
            {" "}
            <div className="Registrar">
              <h1 id="title-registrar">Registrar Usuario</h1>
            </div>
            <label className="label" id="label">
              Correo electronico
            </label>
            <br />
            <div className="field control has-icons-left">
              <input
                className="input is-info"
                name="useremail"
                onChange={this.handleChange} 
                placeholder="Ingresa un correo electronico"
                id="email"
                required
              />
              <span className="icon is-left" id="user">
              <FontAwesomeIcon icon={faUser}/>
              </span>
            </div>
            <label id="hola3" className="label">Contraseña</label>
            <div className="field control has-icons-left">
              <input
                className="input is-info"
                onChange={this.handleChange} 
                name="userpassword"
                type="password"
                placeholder="Ingresa una contraseña"
                id="password"
                required
              />
              <span className="icon is-small is-left" id="lock">
              <FontAwesomeIcon icon={faLock}/>
              </span>
            </div>
            <div className="control1">
              <label className="radio">
                <input id="inputDocente" type="radio" name="userperfil" value="docente" required onChange={this.handleChange} />
                Docente
              </label>
              <label className="radio">
                <input type="radio" name="userperfil" value="estudiante" required onChange={this.handleChange} />
                Estudiante
              </label>
            </div>
            <div className="control">
              <button id="boton" className="button is-primary">
                Enviar
              </button>
            </div>
            <br />
            <div className="option">
              <p>Ya tienes cuenta?</p>
              <a href="!#" rel="noopener noreferrer" id="link" onClick={() => this.props.history.push("/") }>
                {" "}
                Ingresa aquí
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Register)