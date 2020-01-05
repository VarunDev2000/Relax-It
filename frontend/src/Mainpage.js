import React, { Component } from 'react'
import Admin from './Admin'
import Games from './Games'
import Music from './Music'
import News from './News'
import './static/Bounce.css'
import axios from 'axios'

class Mainpage extends Component {
    state = {
        bardata : [],
        wait:true
      }
      link = ""
    componentDidMount()
    {
        // setInterval(()=>{
            this.sentimentAnalyser()
        //  },10000)
        setTimeout(()=>{
            this.setState({wait:false})
        },6000)
    }
    sentimentAnalyser(){
        axios.get("/api/model").then(res =>{
            let data = res.data
            let final = []
            Object.keys(data).forEach(function(key) {
                let dict = {}
                dict["sentiment"] = key
                dict["percent"] = data[key]
                final.push(dict)
            });
            this.setState({bardata:final})
            console.log(this.state.bardata)
            this.state.bardata.forEach(item=>{
                if(item.sentiment === "Sad" || item.sentiment === "Angry" || item.sentiment === "Neutral"|| item.sentiment === "Happy")
                {
                    let number = Math.floor(Math.random() * 3) + 1
                    if(number == 1)
                    this.link = "#music"
                    if(number == 2)
                    this.link = "#games"
                    else
                    this.link = "#news"
                }
            })  
        })
    }
    render() {
        if((this.props.clickedLink).replace("http://localhost:3000/","") !== "")
        this.link = (this.props.clickedLink).replace("http://localhost:3000/","")
        return (
    <div className="et-main">
    <div style={{overflow:"hidden",position:"relative"}}>
    <div className="et-slide" id="home">
      {this.link === "#admin"?
      <Admin/>:
      this.link === "#music"?
      <Music/>:
      this.link === "#games"?
      <Games/>:
      this.link === "#news"?
      <News/>:
      [<div style={{marginTop: "80px"}}>
      <h1 style={{marginTop: "100px"}}><span style={{color: "#464849"}}>R</span><span>E</span><span>L</span><span>A</span><span>X</span><span>-</span><span>I</span><span>T</span></h1>
      <br/><br/>{this.state.wait?<h6 style={{fontFamily: '"Luckiest Guy", cursive'}}>[Intentionally made to dance. To make it Childish :) ]</h6>:null}
      <h3 style={{fontFamily: '"Luckiest Guy", cursive'}}>Cool Workspace</h3></div>,
      this.state.wait?<img src="breathe.gif" alt="gif" height="250" width="280" style={{borderRadius:"15%",marginTop:"30px"}}/>
      :<h3>We've got some things coming up based on your current mood.</h3>
      ]}
    </div>
    </div>
    </div>
        )
    }
}

export default Mainpage
