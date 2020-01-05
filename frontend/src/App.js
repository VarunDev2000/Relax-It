import React from 'react';
import './App.css';
import './static/Mystyles.css'
import Footer from './Footer';
import MyNavbar from './MyNavbar';
import Mainpage from './Mainpage';
import Loading from './Loading';
class App extends React.Component {
  state = {
    link:"",
    isLoading:true
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({isLoading:false})
    },6000)
  }
  getLink = (link) => {
    this.setState({link:link})
    }
  render(){
  return (
    <div className="App">
    {this.state.isLoading?
    <Loading/>:[
    <MyNavbar clickedLink={this.getLink}/>,
    <Mainpage clickedLink={this.state.link}/>,
    <Footer/>,
    ]}
    </div>
  );
}
}
export default App;
