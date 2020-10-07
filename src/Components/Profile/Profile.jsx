import React, { Component } from "react";
import Profilebody from "./Profilebody";
// import Profilefooter from '../../Components/Profile/Profilefooter'
import Layout from "../Layout/Layout";
// import Profilenav from '../../Components/Profile/Profilenav'

class Profile extends Component {
    state = {
        score: 5000,
    }
  render() {
    return (
      <div>
        <Layout score={this.state.score}>
          <Profilebody />
        </Layout>
      </div>
    );
  }
}
export default Profile;
