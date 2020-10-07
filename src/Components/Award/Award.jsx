import React, { Component } from "react";
// import Footer from "../../Shared/Footer";
import Awardbody from "./Awardbody";
// import Awardnav from "./Awardnav";
// import Navbar from "../../Shared/Navbar"
// import { withRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import adobe from "../../Images/Awards/adobe.jpg";
import react from "../../Images/Awards/react.jpg";
import nod32 from "../../Images/Awards/nod32.jpg";
import office from "../../Images/Awards/office.jpg";
import windows from "../../Images/Awards/windows.jpg";
// import paletaagua from "../../Images/Awards/paletaagua.jpeg";
// import colombina from "../../Images/Awards/colombina.jpeg";
// import papasnaturales from "../../Images/Awards/papasnaturales.jpeg";
// import papaspollo from "../../Images/Awards/papaspollo.jpg";
// import papaslimon from "../../Images/Awards/papaslimon.jpeg";
// import coca from "../../Images/Awards/coca.jpeg";
// import cocabotella from "../../Images/Awards/cocabotella.jpg";
// import manzana from "../../Images/Awards/manzana.jpeg";
import swal from "sweetalert";

export default class Award extends Component {
  state = {
    score: 5000,
    gifts: [
      {
        puntos: 14000,
        imagen: adobe,
        description: "3 meses",
      },
      {
        puntos: 50000,
        imagen: react,
        description: "libro de react",
      },
      {
        puntos: 25000,
        imagen: nod32,
        description:"1 año",
      },
      {
        puntos: 13000,
        imagen: office,
        description: "1 año"
      },
      {
        puntos: 77000,
        imagen: windows,
        description: "nueva actualizacion",
      },
    ],
  };

  componentDidMount() {
    // const user = localStorage.getItem("user");
    // this.setState({ user: user ? user : "" });

    // fetch("https://json-server-now.kira4489.vercel.app/users")
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ users: data, score: data[0].score }));
  }

  restar = (point) => {
    const { score } = this.state;
    if (point < score) {
      //this.state-user.points
      this.setState({ score: score - point });
      console.log(`restamos: ${point} de ${score}`);
    } else {
      swal(`No tienes los puntos suficientes para reclamar este premio`);
    }
  };

 render() {
    return (
      <div>
        <Layout score={this.state.score}>
          <Awardbody gifts={this.state.gifts} restar={this.restar} />
        </Layout>
      </div>
    );
  }
}
