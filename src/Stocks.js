import api_keys from "./api_keys.js";
import React from "react";
class Stocks extends React.Component{
    constructor(){
        super();
        this.state = {
            "price":0
        }
    }
    render(){
        return (<div>BTC Current Price: {this.state.price}</div>)
    }
    componentDidMount(){
        let finnhub = api_keys.finnhub;
        this.setState({
            "price":5
        });
        const socket = new WebSocket('wss://ws.finnhub.io?token=' + finnhub);
        // Connection opened -> Subscribe
        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
        });

        // Listen for messages
        socket.addEventListener('message', (event) => {
            let e = JSON.parse(event.data);
            console.log(e.data);
            console.log(e.data[0]);
            this.setState({
                "price":e.data[0].p
            })
        });
    }
}
export default Stocks;