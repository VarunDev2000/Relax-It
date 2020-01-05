import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class MyNavbar extends Component {
    handleOnClick = (e) =>{
        this.props.clickedLink(e.target.href);
    }
    render() {
        return (
            <div>
                <Navbar sticky="top" bg="light">
<Nav className="mr-auto">
    <div className="et-hero-tabs-container">
      <Nav.Link className = "et-hero-tab" href="#home" onClick={this.handleOnClick}>Home</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#music" onClick={this.handleOnClick}>Music</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#games" onClick={this.handleOnClick}>Games</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#news" onClick={this.handleOnClick}>News</Nav.Link>
      <Nav.Link className = "et-hero-tab" href="#admin" style={{color:"orange"}} onClick={this.handleOnClick}>Admin</Nav.Link>
      <span className="et-hero-tab-slider"></span>
      </div>
</Nav>
    
  </Navbar>
            </div>
        )
    }
}

export default MyNavbar
