import React, { Component } from 'react'
import './static/About.css'
import axios from 'axios'
class Music extends Component {
    componentDidMount()
    {
        axios.get("/api/music")
    }
    render() {
        return (
            <div className="container">
            <div className="section animated bounceInLeft">
                <div className="brandname">
                    <br/><br/><br/>
                <img src="guitar.svg" width="150" height="150" alt="svg"/>
                </div>
                <div className="contact">
                <img src="headphones.svg" height="200" width="200" alt="svg"/><h2>Music for your Mood</h2>
                <h6>Playing in the Background..</h6>
                (Turn it off when you feel better)
                </div>
            </div>
        </div>
        )
    }
}

export default Music
