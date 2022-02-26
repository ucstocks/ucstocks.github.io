import React from 'react';
import './App.css';
import Header from './Components/header.js';
import Market from "./classes/market.js";
import PopUp from "./Components/popup.js"; 
class App extends React.Component {
  constructor(){
    super();
    this.market = new Market();
    this.state = {
      "popup":false,
      "time":0,
      "name":"Ali",
      "stats":{
        "health":1,
        "happiness":1,
        "savings":1000,
        "assets":0,
        "stocks":{
          "PEAR":2,
          "GOLD":5
        }
      }
    };
    this.state.stats.assets = this.market.netValue(this.state.stats.stocks);
  }
  tick(){
    return () => {
      let dat = this.state;
      dat.time += 1;
      this.market.tick();
      let val = this.market.netValue(dat.stats.stocks);
      dat.stats.assets = val;
      this.setState(dat);
      this.togglePop();
    }
  }
  calculateDate(time) {
    let month = "";
    let year = Math.floor(time/4 + 2005);
    if (time % 4 == 0) {
      month="January";
    } else if (time % 4 == 1) {
      month = "April";
    } else if (time % 4 == 2) {
      month = "July";
    } else if (time % 4 == 3) {
      month = "October"
    }
    
  
    return (month + " 1st, " + year);
  }
  togglePop = () => {
    this.setState({
     seen: !this.state.seen
    });
   };
  render(){
    return (
      <div className="App">
        {this.state.seen ? <PopUp market={this.market} stocks={this.state.stats.stocks} toggle={this.togglePop} /> : null}
        <Header name={this.state.name}/>
        <div className="body">
          <div className="log-window">
            <p>&gt;Welcome to (name)!</p>
            <p>&gt;The date is {this.calculateDate(this.state.time)}</p>
          </div>
          <button className="start-button" onClick={this.tick()}>
            <h1>Start</h1>  
          </button>
          <p>{this.state.time}</p>
          <p>Stocks assets: {this.state.stats.assets}</p>
        </div>
      </div>
    );
  }
  
}

  
export default App;
