import React, { Component } from 'react';
import facebook from '../../Images/facebook.png'
import tiktok from '../../Images/tiktok.png'
import instagram from '../../Images/instagram.jpg'
import youtube from '../../Images/youtube.png'
import snap from '../../Images/snap.png'
import twitter from '../../Images/twitter.png'
import { withRouter } from "react-router-dom";

class Profilebody extends Component {
    render() {
        return (
            <div className="container">
                <div className="columns" id="redes">
                    <div className="column is-one-quarter" id="column-redes">
                    <a href="https://www.facebook.com/julioprofenet/" target="_blank">
                    <img src={facebook} alt="facebook"/>
                    </a>
                    <br/>
                    <a href="https://www.youtube.com/user/julioprofe/" target="_blank">
                    <img src={youtube} alt=""/>
                    </a>
                    </div>
                    <br/>
                    <div className="column is-one-quarter" id="column-redes">
                    <a href="https://www.instagram.com/developers_team/?hl=es-la" target="_blank">
                    <img src={instagram} alt="instagram"/>
                    </a>
                    <br/>
                    <a href="https://www.tiktok.com/@aprende.mates?lang=es" target="_blank">
                    <img src={tiktok} alt="tiktok"/>
                    </a>
                    </div>
                    <div className="column is-one-quarter" id="column-redes">
                    <a href="" target="_blank">
                    <img src={snap} alt=""/>
                    </a>
                    <br/>
                    <a href="https://twitter.com/hektorprofe?lang=es" target="_blank">
                    <img src={twitter} alt=""/>
                    </a>
                    </div>
                </div>
                <div id="button">
                <button className="button is-primary" onClick={() => this.props.history.push("/Review")}>Reto</button>
                    <button className="button is-primary" onClick={() => this.props.history.push("/Award")}>Recompensa</button>
               {/* <button className="button is-primary" onClick={() => this.props.history.push("/Home") }>Mi colegio</button> */}
                </div>
            </div>
        )
    }
}
export default withRouter(Profilebody);
