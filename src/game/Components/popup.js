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
methodGenerator(ticker,diff,min,max){
    return () => {
        let dat = this.state;
        dat.decisions[ticker] += diff;
        if(dat.decisions[ticker] < min){
            dat.decisions[ticker] -= diff;
            return;
        }
        if(dat.decisions[ticker] > max){
            dat.decisions[ticker] -= diff;
            return;
        }
        this.setState(dat);
    }
}
methodInput(ticker,min,max){
    return (e) => {
        let dat = this.state;
        let before = dat.decisions[ticker];
        dat.decisions[ticker] = parseInt(e.target.value);
        if(dat.decisions[ticker] < min){
            dat.decisions[ticker] = before
            return;
        }
        if(dat.decisions[ticker] > max){
            dat.decisions[ticker] = before;
            return;
        }
        this.setState(dat);
    }
}
sellTheThings(callback){
    return () => {
        callback();
        let keys = Object.keys(this.state.decisions);
        let dat = this.state;
        for(let i = 0;i<keys.length;i++){
            dat.decisions[keys[i]] = 0;
        }
        this.setState(dat);
    }
}
render() {
  let market = this.props.market;
  let stocks = this.props.stocks;
  let savings = this.props.savings;

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

      let minShares = this.props.stocks[ticker] * -1;
      let maxShares = Math.floor((savings - this.props.costAfter(this.state.decisions)) / market.stocks[ticker].price + this.state.decisions[keys[i]]);
      info.push(
        <tbody key={i}>
            <tr>
                <th scope="row">{ticker}</th>
                <td>{"$" + price}</td>
                <td>{format((price / previousPrice) * 100 - 100) + "%"}</td>
                <td>{stocks[ticker]}</td>
                <td>{"$" + (format(price-previousPrice))}</td>
                <td><button className="btn btn-danger buy-sell" onClick={this.methodGenerator(keys[i],-1,minShares,maxShares)}>-</button>&nbsp;<button className="btn btn-success buy-sell" onClick={this.methodGenerator(keys[i],1,minShares,maxShares)}>+</button></td>
                <td><input min={minShares} max={maxShares} type="number" value={this.state.decisions[keys[i]]} onChange={this.methodInput(keys[i],minShares,maxShares)}/></td>
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
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Ticker</th>
                            <th scope="col">Price</th>
                            <th scope="col">% Change</th>
                            <th scope="col">Shares</th>
                            <th scope="col">$ Change</th>
                            <th scope="col">Buy / Sell</th>
                            <th scope="col">Share Change</th>
                            <th scope="col">$ Change</th>
                            </tr>
                        </thead>
                        {info}
                    </table>
                </div>
            </div>
            <h3>{format(savings)} --&gt; {format(savings - this.props.costAfter(this.state.decisions))}</h3>
            <button className="close btn btn-primary" onClick={this.sellTheThings(this.props.doPurchase(this.state.decisions))}>Confirm Transaction</button>&nbsp;
            <button className="close btn btn-success" onClick={this.handleClick}>Leave Trading Screen</button>
        </div>
   </div>
  );
 }
}