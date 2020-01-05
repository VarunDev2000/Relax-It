import React, { Component } from 'react'
import './static/About.css'
import './static/Glitch.css'
import BarChart from './BarChart'
import axios from 'axios'
import * as d3 from 'd3'
import LineChart from './LineChart'

class Admin extends Component {
    state = {
        username:"",
        password:"",
        isLoggedIn:false,
        barchartData:[],
        linechartData:[]
    }
    componentDidMount(){
            axios.get("/api/").then(res =>{
                let data = res.data
                let final = []
                data.forEach(item => {
                delete item.id
                delete item.Timestamp
                Object.keys(item).forEach(function(key) {
                    let dict = {}
                    dict["sentiment"] = key
                    dict["percent"] = item[key]
                    final.push(dict)
                });
              })
              var avgData = d3.nest()
                            .key(function(d) { return d.sentiment; })
                            .rollup(function(v) { return d3.mean(v, function(d) { return d.percent; }); })
                            .entries(final);
              const newAvg = []
              avgData.forEach(element => {
                  let dict = {}
                  dict["sentiment"] = element.key
                  dict["percent"] = element.value*100
                  newAvg.push(dict)
              });
              let percent = 0
              newAvg.forEach(element=>{
                percent += element["percent"]
              })

              newAvg.forEach(element=>{
                element["percent"] = (element["percent"]/percent)*100
              })
              this.setState({barchartData:newAvg})
            }); 

// LINE CHARTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
            axios.get("/api/").then(res =>{
                let data = res.data
                let final = []
                data.forEach(item => {
                delete item.id
                Object.keys(item).forEach(function(key) {
                    let dict = {}
                    dict["Timestamp"] = item["Timestamp"]
                    if(key !== "Timestamp")
                    {
                    dict["sentiment"] = key
                    dict["percent"] = item[key]
                    final.push(dict)
                    }
                });
              })
              this.setState({linechartData:final})
            }); 
    }
    handleUsername = (e) => {
        this.setState({username:e.target.value})
    }

    handlePassword = (e) => {
        this.setState({password:e.target.value})
    }

    handleOnSubmit = (e) => {
        const username = "admin"
        const password = "1234"
        if(this.state.password === password && this.state.username === username)
            {
                this.setState({isLoggedIn:true})
            }
        else
            alert("Invalid Username or Password")
        e.preventDefault()
        }

    render() {
        return (
    <div className="container">
        {!this.state.isLoggedIn?
        <div className="section animated bounceInLeft">
            <div className="brandname">
                <img src="administrator.svg" width="200" height="200" alt="svg"></img>
            </div>
            <div className="contact">
                <div data-text="Login">Login</div>
                <form>
                    <p>
                        <label>Username</label>
                        <input type="text" onChange={this.handleUsername}/>
                    </p>
                    <p>
                        <label>Password</label>
                        <input type="password" onChange={this.handlePassword}/>
                    </p>
                    <p className="full">
                        <button onClick={this.handleOnSubmit}>Submit</button>
                    </p>
                </form>
            </div>
        </div>
        :
        <div className="et-slide" style={{marginTop:"20px"}}>
            <h1>Happiness Index</h1>
            <div className="charts">
            <BarChart chartData = {this.state.barchartData}/>
            <LineChart chartData={this.state.linechartData}/>
            </div>
        </div>}
    </div>
        )
    }
}

export default Admin
