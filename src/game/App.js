import React from 'react';
import './App.css';
import Header from './Components/header.js';
import Stock from "./classes/stocks.js";
class App extends React.Component {
  constructor(){
    super();
    this.state ={
      "time":0,
      "name":"Ali",
      "stats":{
        "health":1,
        "happiness":1,
        "savings":1000,
        "stocks":[new Stock("Pear","PEAR",50.23,2,0)]
      }
    };
  }
  tick(){
    return () => {
      let dat = this.state;
      dat.time += 1;
      this.setState(dat);
    }
  }
  render(){
    console.log(this.state);
    return (
      <div className="App">
        
        <Header />
        <div className="body">
          <div className="log-window">
          
          </div>
          <button className="start-button" onClick={this.tick()}>
            <h1>Start</h1>  
          </button>
          <p>{this.state.time}</p>
        </div>
        
      </div>
    );
  }
}

export default App;
