import React, { Component } from "react";
import "bulma/css/bulma.css";
import logo from "../../Images/logo1.png"
import inem from "../../Images/inem.jpg"
import "./Home.css";
export default class HomeBody extends Component {
  render() {
    return (
      <>
        <div className="columns" id="container1">
          <div className="column is-two-fifths" id="container3">
            <h1>Informacion</h1>
            <img id="imagen" src={logo} alt="logo"/>
            <p>
              Es una institución oficial, dedicada a la prestación de servicios
              de educación formal en los niveles de Preescolar, Básica Primaria,
              Básica Secundaria, Media Técnica y Media Académica. 
            </p>
          </div>
          <div className="column" id="container4">
            <h1 id="title4">Historia</h1>
            <img id="imagen1" src={inem} alt="inem"/>
            <p>
              En 1969, durante la administración de Carlos Lleras Restrepo, por
              medio del Decreto 1962, se creó un grupo de colegios en todas los
              capitales departamentales llamados INEM3. El INEM José Félix de
              Restrepo fue diseñado por el arquitecto Raúl Fajardo Moreno y se
              inauguró en 1970, antes de que se construyera la Avenida Las
              Vegas, motivo por el cual los estudiantes iniciaron protestas.
            </p>
          </div>
        </div>
        <section className="column">
          <h1 id="title5">Nuestra vision</h1>
          <p>
            Presentamos a continuación el Manual de Convivencia de la
            Institución Educativa INEM José Félix de Restrepo, construido con la
            participación representativa de todos los miembros de la comunidad,
            mediante un proceso responsable, exigente y democrático, permitiendo
            disponer de una estructura normativa, fiel a los principios y
            polí­ticas de la Institución, a la Constitución Polí­tica de
            Colombia, Ley General de Educación, Ley de Infancia y Adolescencia y
            demás disposiciones legales.
          </p>
          <br/>
          <h3 id="title6">Mision</h3>
          <p>
            Una vez termine de diligenciar exitosamente el formulario de
            inscripción, recibirá un mensaje automático, en el cual se le indica
            que su solicitud está en proceso.
            La respuesta a la solicitud de cupo, se realizará a través de correo
            electrónico dentro de los 5 días hábiles siguientes a la inscripción
          </p>
        </section>
      </>
    );
  }
}