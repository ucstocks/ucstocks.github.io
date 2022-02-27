import React from 'react';
import './App.css';
import Header from './Components/header.js';
import Market from "./classes/market.js";
import Events from "./classes/events.js";
import PopUp from "./Components/popup.js"; 
import Definition from "./Components/definition.js";
import format from "./functions/format";
const monke = {
  "gameState":"news", /*Gamestates include
  await
  stocks
  news
  */
  "popup":false,
  "time":0,
  "date":"Sep. 1, 2005",
  "name":"Ali",
  "stats":{
    "total_income":0,
    "inflation":0.03,
    "pay":3873.60,
    "rent":3210.46,
    "health":1,
    "happiness":1,
    "savings":1000,
    "stocks":{
      "PEAR":0,
      "GOLP":0,
      "BRWL":0,
      "RASP":0,
      "BIGM":0,
      "CINH":0,
      "PROF":0,
      "JEFF":0
    }
  },
    
  "dialogue":[<p> 9/01/05 <b>&gt;</b> Welcome to the Wage-Worker of Wallstreet by Wahoo Finance!</p>,
  <p>9/01/05 <b>&gt;</b> The date is Sep. 1, 2005</p>,
  <p>9/01/05 <b>&gt;</b> Your name is Ali, and you live and work within New York.</p>,
  <p>9/01/05 <b>&gt;</b> While in real life you have to manage bills, Ali's AI will handle that for you. You just have to decide how to responsibly invest his money.</p>,<p>9/1/05 <b>&gt;</b> Throughout this game, you'll be making decisions on what stocks to buy and sell.</p>,
  <p>9/01/05 <b>&gt;</b> Press the blue "Progress" button to move forward three months.</p>]
    
}
class App extends React.Component {
  constructor(){
    super();
    console.log(monke);
    this.state = {
      "gameState":"news", /*Gamestates include
      await
      stocks
      news
      */
      "popup":false,
      "time":0,
      "date":"Sep. 1, 2005",
      "name":"Ali",
      "stats":{
        "total_income":0,
        "inflation":0.03,
        "pay":3873.60,
        "rent":3210.46,
        "health":1,
        "happiness":1,
        "savings":1000,
        "stocks":{
          "PEAR":0,
          "GOLP":0,
          "BRWL":0,
          "RASP":0,
          "BIGM":0,
          "CINH":0,
          "PROF":0,
          "JEFF":0
        }
      },
        
      "dialogue":[<p> 9/01/05 <b>&gt;</b> Welcome to the Wage-Worker of Wallstreet by Wahoo Finance!</p>,
      <p>9/01/05 <b>&gt;</b> The date is Sep. 1, 2005</p>,
      <p>9/01/05 <b>&gt;</b> Your name is Ali, and you live and work within New York.</p>,
      <p>9/01/05 <b>&gt;</b> While in real life you have to manage bills, Ali's AI will handle that for you. You just have to decide how to responsibly invest his money.</p>,<p>9/1/05 <b>&gt;</b> Throughout this game, you'll be making decisions on what stocks to buy and sell.</p>,
      <p>9/01/05 <b>&gt;</b> Press the blue "Progress" button to move forward three months.</p>]
        
    }

    this.state.events = new Events();
    this.state.market = new Market();
    this.state.stats.assets = this.state.market.netValue(this.state.stats.stocks);
  }
  costAfter(decision){
    let cost = 0;
    let keys = Object.keys(decision);
    for(let i = 0;i < keys.length;i++){
      cost += decision[keys[i]] * this.state.market.stocks[keys[i]].price
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
      if(this.state.gameState === "gameOver"){
        let dat = {
          "gameState":"news", /*Gamestates include
          await
          stocks
          news
          */
          "popup":false,
          "time":0,
          "date":"Sep. 1, 2005",
          "name":"Ali",
          "stats":{
            "total_income":0,
            "inflation":0.03,
            "pay":3873.60,
            "rent":3210.46,
            "health":1,
            "happiness":1,
            "savings":1000,
            "stocks":{
              "PEAR":0,
              "GOLP":0,
              "BRWL":0,
              "RASP":0,
              "BIGM":0,
              "CINH":0,
              "PROF":0,
              "JEFF":0
            }
          },
            
          "dialogue":[<p> 9/01/05 <b>&gt;</b> Welcome to the Wage-Worker of Wallstreet by Wahoo Finance!</p>,
          <p>9/01/05 <b>&gt;</b> The date is Sep. 1, 2005</p>,
          <p>9/01/05 <b>&gt;</b> Your name is Ali, and you live and work within New York.</p>,
          <p>9/01/05 <b>&gt;</b> While in real life you have to manage bills, Ali's AI will handle that for you. You just have to decide how to responsibly invest his money.</p>,<p>9/1/05 <b>&gt;</b> Throughout this game, you'll be making decisions on what stocks to buy and sell.</p>,
          <p>9/01/05 <b>&gt;</b> Press the blue "Progress" button to move forward three months.</p>]
            
        }
        dat.events = new Events();
        dat.market = new Market();
        dat.stats.assets = dat.market.netValue(dat.stats.stocks);
        this.setState(dat);
      }
      else if(this.state.time === 8){
        let dat = this.state;
        dat.gameState = "gameOver";
        dat.dialogue.push(
          <h3><b>Game over!</b></h3>);
          dat.dialogue.push(<p>You started with $1000 and ended with ${format(dat.stats.savings + dat.stats.assets)}</p>);
          dat.dialogue.push(<p>If you had not invested in the stock market, you would have ${format(dat.stats.total_income + 1000)}</p>);
          dat.dialogue.push(<p>Through your investments, you now have ${format(dat.stats.assets + dat.stats.savings)}</p>);
          let profitPct = ((dat.stats.assets + dat.stats.savings) / (dat.stats.total_income + 1000)) * 100 - 100;
          if(profitPct > 0){
            dat.dialogue.push(<p>Congratulations! Your investments made a {format(profitPct)}% gain.</p>);
            dat.dialogue.push(<p>From 2005 - 2007, the stock market performed exceptionally well. However, you can't predict stocks in the future, which sometimes more poorly in the short term.</p>);
            dat.dialogue.push(<p>In 2008, there was a recession in the stock market. Stocks have since bounced back, but be aware that stocks aren't guaranteed money.</p>);
          } else if(profitPct === 0){
            dat.dialogue.push(<p>Because you just held onto your money, you made a {format(profitPct)}% gain.</p>); 
            dat.dialogue.push(<p>Try buying stocks next time!</p>);
          } else{
            dat.dialogue.push(<p>Your poor investments caused you to lose money, with a {format(profitPct)}% loss.</p>);
            dat.dialogue.push(<p>This could have been caused by risky investments, or just bad luck.</p>);
          }

        dat.dialogue = [...dat.dialogue];
        this.setState(dat);
      }
      else if(this.state.gameState === "news"){
        let dat = this.state;
        dat.time += 1;
        this.state.market.tick(dat.time);
        dat.stats.pay = 3873.60 * Math.exp(0.03 * dat.time / 4);
        dat.stats.rent = 3210.46 * Math.exp(0.03 * dat.time / 4);
        dat.dialogue.push(<p><b>3 months have passed</b></p>);
        dat.dialogue.push(<hr/>);
        dat.dialogue.push(<p>{this.state.events.calculateDate(dat.time)} <b>&gt;</b> Your <Definition text="cost of living"/> and salary have increased due to <Definition text="inflation"/>.</p>);
        dat.dialogue.push(<p>{this.state.events.calculateDate(dat.time)} <b>&gt;</b> Expenses have cost Ali ${format(dat.stats.rent*3)}.</p>);
        dat.dialogue.push(<p>{this.state.events.calculateDate(dat.time)} <b>&gt;</b> Ali has made ${format(dat.stats.pay*3)} <Definition text="gross pay"/> in his job</p>);
        dat.dialogue.push(<p>{this.state.events.calculateDate(dat.time)} <b>&gt;</b> Ali has netted ${format(dat.stats.pay*3-dat.stats.rent*3)}</p>);
        dat.stats.savings += (dat.stats.pay*3-dat.stats.rent*3);
        dat.stats.total_income += (dat.stats.pay*3-dat.stats.rent*3);
        dat.dialogue = [...dat.dialogue,this.state.events.handleEvents(dat.time)];
        dat.date = this.calculateDate(dat.time);
        dat.gameState = "await";
        this.setState(dat);
      }
      else if(this.state.gameState === "await"){
        this.state.gameState = "stocks";
        this.setState(this.state);
        this.togglePop();
      }
      
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
    this.state.gameState = "news";
    this.setState({
     seen: !this.state.seen
    });
   };
  componentDidMount() {
    window.$('[data-bs-toggle="tooltip"]').tooltip();
    this.scrollToBottom();
  }

  componentDidUpdate() {
    window.$('[data-bs-toggle="tooltip"]').tooltip();
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }
  render(){
    console.log(this.state);
    return (
      <div className="App">
        {this.state.seen ? <PopUp costAfter={this.costAfter.bind(this)} doPurchase={this.doPurchase.bind(this)} savings={this.state.stats.savings} market={this.state.market} stocks={this.state.stats.stocks} toggle={this.togglePop} /> : null}
        <Header name={this.state.name} health={this.state.stats.health} money={format(this.state.stats.savings)} 
        assets={format(this.state.market.netValue(this.state.stats.stocks))} date={this.state.date}/>
        <div className="body">
          <div className="log-window container">
            {this.state.dialogue}
            <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
          <button className="btn btn-block btn-primary start-button container" onClick={this.progress()}>
            <h1>{this.state.gameState === "gameOver" ? "Play again" : this.state.gameState === "await" ? "View Stocks" : "Progress"}</h1>  
          </button>
        </div>
      </div>
    );
  }
  
}

  
export default App;
