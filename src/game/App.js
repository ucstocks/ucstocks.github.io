import React from 'react';
import './App.css';
import Header from './Components/header.js';
import Market from "./classes/market.js";
class App extends React.Component {
  constructor(){
    super();
    this.market = new Market();
    this.state = {
      "time":0,
      "name":"Ali",
      "stats":{
        "health":1,
        "happiness":1,
        "savings":1000,
<<<<<<< HEAD
        "stocks":[new Stock("Pear","PEAR",50.23,2,0)],
      },
      "dialogue":[]
=======
        "assets":0,
        "stocks":{
          "PEAR":2
        }
      }
>>>>>>> refs/remotes/origin/main
    };
    this.state.stats.assets = this.market.netValue(this.state.stats.stocks);
  }
  progress(){
    return () => {
      let dat = this.state;
      dat.time += 1;
      this.market.tick();
      let val = this.market.netValue(dat.stats.stocks);
      dat.stats.assets = val;
      this.setState(dat);
      let dialogue
      this.state.dialogue.unshift(<p>The date is {this.calculateDate(this.state.time)}</p>);
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
  render(){
<<<<<<< HEAD

    
    console.log(this.state);
=======
>>>>>>> refs/remotes/origin/main
    return (
      <div className="App">
        
        <Header name={this.state.name}/>
        <div className="body">
          <div className="log-window">
            {this.state.dialogue}
          </div>
          <button className="start-button" onClick={this.progress()}>
            <h1>Progress</h1>  
          </button>
          <p>{this.state.time}</p>
          <p>Stocks assets: {this.state.stats.assets}</p>
        </div>
        
      </div>
    );
  }
  
}

  
export default App;
