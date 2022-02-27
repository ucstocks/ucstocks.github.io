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
      "date":"Sep. 1, 2005",
      "name":"Ali",
      "stats":{
        "health":1,
        "happiness":1,
        "savings":1000,
        "assets":0,
        "stocks":{
          "PEAR":2,
          "GOLP":5,
        }
      },
        
      "dialogue":[<p> 9/01/05 <b>&gt;</b> Welcome to the Wage-Worker of Wallstreet by Wahoo Finance!</p>,
      <p>9/01/05 <b>&gt;</b> The date is Sep. 1, 2005</p>,
      <p>9/01/05 <b>&gt;</b> Your name is Ali, and you live and work within New York.</p>,
      <p>9/01/05 <b>&gt;</b> While in real life you have to manage bills, Ali's AI will handle that for you. You just have to decide how to responsibly invest his money.</p>,<p>9/1/05 <b>&gt;</b> Throughout this game, you'll be making decisions on what stocks to buy and sell.</p>,
      <p>9/01/05 <b>&gt;</b> Press the blue "Progress" button to move forward three months.</p>]
        
    };
    this.state.stats.assets = this.market.netValue(this.state.stats.stocks);
  }
  costAfter(decision){
    let cost = 0;
    let keys = Object.keys(decision);
    for(let i = 0;i < keys.length;i++){
      cost += decision[keys[i]] * this.market.stocks[keys[i]].price
    }
    return cost;
  }
  doPurchase(decision){
    return () => {
      let keys = Object.keys(decision);
      let dat = this.state;
      for(let i = 0;i < keys.length;i++){
        console.log(this.state);
        dat.stats.stocks[keys[i]] += decision[keys[i]];
      }
      dat.stats.savings -= this.costAfter(decision);
      this.setState(dat);
    }
  }
  progress(){
    return () => {
      let dat = this.state;
      dat.time += 1;
      this.market.tick(dat.time);
      let val = this.market.netValue(dat.stats.stocks);
      dat.stats.assets = val;
      this.state.dialogue.push(<p><b>3 months have passed</b></p>);
      this.state.dialogue.push(<hr/>);
      dat.date = this.calculateDate(this.state.time);
      this.setState(dat);
      this.togglePop();
    }
  }
  calculateDate(time) {
    time += 3;
    let month = "";
    let year = Math.floor(time/4 + 2005);
    if (time % 4 == 0) {
      month="Jan.";
    } else if (time % 4 == 1) {
      month = "Apr.";
    } else if (time % 4 == 2) {
      month = "Jul.";
    } else if (time % 4 == 3) {
      month = "Oct."
    }
    
  
    return (month + " 1, " + year);
  }
  togglePop = () => {
    this.setState({
     seen: !this.state.seen
    });
   };
  render(){

    
    return (
      <div className="App">
        {this.state.seen ? <PopUp costAfter={this.costAfter.bind(this)} doPurchase={this.doPurchase.bind(this)} savings={this.state.stats.savings} market={this.market} stocks={this.state.stats.stocks} toggle={this.togglePop} /> : null}
        <Header name={this.state.name} health={this.state.stats.health} money={this.state.stats.savings} 
        assets={Math.round(this.state.stats.assets * 100) / 100} date={this.state.date}/>
        <div className="body">
          <div className="log-window container">
            {this.state.dialogue}
          </div>
          <button className="btn btn-block btn-primary start-button container" onClick={this.progress()}>
            <h1>Progress</h1>  
          </button>
        </div>
      </div>
    );
  }
  
}

  
export default App;
