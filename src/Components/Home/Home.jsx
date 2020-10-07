import React, { Component } from 'react'
import HomeNav from './HomeNav'
import HomeBody from "./HomeBody"
import Footer from '../../Shared/Footer'
export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeNav/>
                <HomeBody/>
                <Footer/>
            </div>
        )
    }
}