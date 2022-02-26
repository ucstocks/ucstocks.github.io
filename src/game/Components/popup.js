import React, { Component } from "react";
export default class PopUp extends Component {
  handleClick = () => {
   this.props.toggle();
  };
  constructor(){
      super();
      this.state = {
          "decisions":{

          }
      }
  }
methodGenerator(ticker,diff){
    return () => {
        let dat = this.state;
        dat.decisions[ticker] += diff;
        this.setState(dat);
    }
}
methodInput(ticker){
    return (e) => {
        let dat = this.state;
        dat.decisions[ticker] = parseInt(e.target.value);
        this.setState(dat);
    }
}
render() {
  let market = this.props.market;
  let stocks = this.props.stocks;

  let stockKeys = Object.keys(market.stocks);
  for(let i = 0;i<stockKeys.length;i++){
      if(!this.state.decisions[stockKeys[i]]){
        this.state.decisions[stockKeys[i]] = 0;
      }
  }

  let info = [];
  let keys = Object.keys(stocks);
  function format(num){
      return Math.round(num * 100) / 100
  }
  for(let i = 0;i<keys.length;i++){
      let ticker = keys[i];
      let price =  Math.round(market.stocks[ticker].price * 100) / 100;
      let previousPrice =  Math.round(market.stocks[ticker].previousPrice * 100) / 100;
      info.push(
          <tbody key={i}>
                <tr>
                    <th scope="row">{ticker}</th>
                    <td>{"$" + price}</td>
                    <td>{format((price / previousPrice) * 100 - 100) + "%"}</td>
                    <td>{stocks[ticker]}</td>
                    <td>{"$" + (format(price-previousPrice))}</td>
                </tr>
          </tbody>
      )
  }
  let decisions = [];
    for(let i = 0;i<keys.length;i++){
        decisions.push(
            <tbody key={i}>
                <tr>
                    <td><button className="btn btn-danger buy-sell" onClick={this.methodGenerator(keys[i],-1)}>-</button>&nbsp;<button className="btn btn-success buy-sell" onClick={this.methodGenerator(keys[i],1)}>+</button></td>
                    <td><input type="number" value={this.state.decisions[keys[i]]} onChange={this.methodInput(keys[i])}/></td>
                    <td>{format(market.stocks[keys[i]].price * this.state.decisions[keys[i]])}</td>
                </tr>
            </tbody>
        )
    }
  return (
   <div className="modal">
        <div className="modal_content">
            <p>3 months have passed! Here's what happened to the following stocks. Feel free to buy and sell your shares.</p>

            <div className="row">
                <div className="col-7">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Ticker</th>
                            <th scope="col">Price</th>
                            <th scope="col">% Change</th>
                            <th scope="col">Shares</th>
                            <th scope="col">$ Change</th>
                            </tr>
                        </thead>
                        {info}
                    </table>
                </div>
                <div className="col-5">
                <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Buy / Sell</th>
                            <th scope="col">Share Change</th>
                            <th scope="col">$ Change</th>
                            </tr>
                        </thead>
                        {decisions}
                    </table>
                </div>
            </div>
            <button className="close btn btn-success" onClick={this.handleClick}>I'm done viewing stocks</button>
        </div>
   </div>
  );
 }
}