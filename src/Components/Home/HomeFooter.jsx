import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, faEnvelope);
library.add(fab, faTwitter, faFacebook);

export default class HomeFooter extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="content has-text-centered">
            <span id="icons">
              <a href="/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </span>
            <p>
              <strong>EDDY APP</strong> by{" "}
              <a href="https://jgthms.com" rel="noopener noreferrer">Todos los derechos son reservados</a>
              . The source code is licensed
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
