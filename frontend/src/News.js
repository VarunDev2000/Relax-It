import React, { Component } from 'react'
import './static/About.css'
import './static/Glitch.css'
class News extends Component {
    componentDidMount () {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js"
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="container">
            <div className="section animated bounceInLeft">
                <div className="brandname">
                    <img src="newspaper.svg" width="200" height="200" alt="svg"/>
                </div>
                <div className="contact">
                    <div className="glitch" data-text="News">News</div>
                        <a class="twitter-timeline" data-width="100%" href="https://twitter.com/BBCBreaking">Tweets by BBCBreaking</a>     
                </div>
            </div>
        </div>
        )
    }
}

export default News
