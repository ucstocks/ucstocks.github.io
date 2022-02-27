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
      "date":"January 1st, 2005",
      "name":"Ali",
      "stats":{
        "health":1,
        "happiness":1,
        "savings":1000,
        "assets":0,
        "stocks":{
          "PEAR":2,
          "GOLP":5
        }
      },
        
      "dialogue":[]
        
    };
    this.state.stats.assets = this.market.netValue(this.state.stats.stocks);
  }
  progress(){
    return () => {
      let dat = this.state;
      dat.time += 1;
      this.market.tick(dat.time);
      let val = this.market.netValue(dat.stats.stocks);
      dat.stats.assets = val;
      this.state.dialogue.unshift(<p>The date is {this.calculateDate(this.state.time)}</p>);
      dat.date = this.calculateDate(this.state.time);
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

    
    console.log(this.state);
    return (
      <div className="App">
        {this.state.seen ? <PopUp market={this.market} stocks={this.state.stats.stocks} toggle={this.togglePop} /> : null}
        <Header name={this.state.name} health={this.state.stats.health} money={this.state.stats.savings} 
        assets={Math.ceil(this.state.stats.assets * 100) / 100} date={this.state.date}/>
        <div className="body">
          <div className="log-window">
            {this.state.dialogue}
          </div>
          <button className="start-button" onClick={this.progress()}>
            <h1>Progress</h1>  
          </button>
        </div>
      </div>
    );
  }
  
}

  
export default App;
