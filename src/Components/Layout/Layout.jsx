import React, { Component } from "react";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import { withRouter } from "react-router-dom";
import oroImage from "../../Images/oro.jpg";

class Layout extends Component {
  state = {
    users: [],
    user: "",
    degree: "",
    badge: "",
    trophy: "",
    img: ""
  };

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ user: user ? user : "" });
    fetch("https://json-server-now.kira4489.vercel.app/users")
      .then((response) => response.json())
      .then((data) => {
        data.map((datauser) => {
          if (datauser.user === user) {
            console.log(datauser);
            this.setState({ userData: datauser });
            this.setState({ degree: datauser.degree });
            this.setState({badge: datauser.badge})
            this.setState({ trophy: datauser.trophy})
            if(datauser.trophy === "oro"){
              this.setState({ img: oroImage })
            } else if(datauser.trophy === "plata"){
              this.setState({ img: oroImage })
            } else if(datauser.trophy === "bronce"){
              this.setState({ img: oroImage })
            }
          }
        });
      });
  }

  close = () => {
    localStorage.removeItem("auth");
    this.props.history.replace("/");
  };

  render() {
    return (
      <>
        <Navbar
          degree={this.state.degree}
          score={this.props.score}
          user={this.state.user}
          close={this.close}
          badge={this.state.badge}
          trophy={this.state.trophy}
          img={this.state.img}
        />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
export default withRouter(Layout);
