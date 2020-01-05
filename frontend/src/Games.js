import React, { Component } from 'react'
import './static/Glitch.css'
class Games extends Component {
    state = {
        random:0
    }
    componentDidMount(){
        let number = Math.floor(Math.random() * 4) + 1
        this.setState({random:number})
    }
    render() {
        return (
            <div className="container"  style={{marginTop:"-20px"}}>
        <div className="section animated bounceInLeft" style={{paddingLeft:"123px"}}>
            <div className="contact">
                <form action="#">
                {this.state.random === 1?
                <iframe width="800" height="450" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/1463/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>
                :
                this.state.random === 2?
                <iframe width="800" height="450" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/1039/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>
                :
                this.state.random === 3?
                <iframe width="800" height="450" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/119/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>
                :
                <iframe width="800" height="450" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/857/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>
                }
                </form>
            </div>
        </div>
    </div>
        )
    }
}

export default Games
