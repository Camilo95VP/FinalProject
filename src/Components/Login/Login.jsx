import React, { Component } from "react";
import "./Login.css";
import cabezarobot from "../../Images/cabezarobot.png";
import robot3 from "../../Images/robot3.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faLock,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { fab, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, faLock, faUser, faEnvelope);
library.add(fab, faTwitter, faFacebook);

class Login extends Component {
  state = {
    users: [],
    user: {
      name: "",
      password: "",
    },
    isAuth: false,
    errorMessage: "",
  };

  componentDidMount() {
    const isAuth = JSON.parse(localStorage.getItem("auth")); //para verificar la clave auth
    if (isAuth) {
      this.setState({ isAuth: true });
      this.props.history.replace("/Profile");
    }
    fetch("https://json-server-now.kira4489.vercel.app/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  handleOnchange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = () => {
    this.state.users.filter((user) => {
      if (
        user.user === this.state.user.name &&
        user.password === this.state.user.password
      ) {
        this.setState({
          isAuth: true,
          errorMessage: "",
        });
        localStorage.setItem("auth", true);
        localStorage.setItem("user", user.user);
        this.props.history.replace("/Profile");
      } else {
        this.setState({
          isAuth: false,
          errorMessage: "Los datos no coinciden!",
        });
      }
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="columns is-centered">
          <section className="column" id="column1">
            <img className="is-rounded" id="cabeza" src={cabezarobot} />
            <form onSubmit={this.handleOnSubmit}>
              ​{" "}
              <label className="label" id="label">
                Usuario o Correo
              </label>
              <br />
              <div className="field control has-icons-left">
                <input
                  className="input is-info"
                  name="name"
                  onChange={this.handleOnchange}
                  placeholder="Ingresa tu usuario o Correo"
                  id="email"
                  required
                />
                <span className="icon is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              ​ <label className="label" id="label1">Contraseña</label>
              <div className="field control has-icons-left">
                <input
                  className="input is-info"
                  onChange={this.handleOnchange}
                  name="password"
                  type="password"
                  placeholder="Ingresa tu clave"
                  id="password"
                  required
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </div>
              <div className="control">
                <button className="button is-primary" onClick={this.login}>
                  Entrar
                </button>
                <br />
                <button
                  className="button is-primary"
                  onClick={() => this.props.history.push("/Register")}
                >
                  Registrarse
                </button>
              </div>
              <br />
              {this.state.errorMessage && this.state.errorMessage}
              <br />
              <a id="link" href="/">
                Olvidaste tu contraseña
              </a>
            </form>
          </section>
          <section className="column" id="column2">
            <img className="robot" src={robot3} alt="robot" />
            <h1 id="h1">E D D Y - A P P</h1>
            <h3 id="h3">Lo que quieras aprender con un solo click</h3>
            <span id="icons-login">
              <a
                href="https://www.facebook.com/Eddy-Software-Educativo-105583811295277"
                target="_blank" rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/SoftwareEddy" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="mailto:eddysoftwareducativo@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </span>
          </section>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
