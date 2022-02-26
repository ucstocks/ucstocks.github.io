import Stock from "./stocks";
class Market {
    constructor(){
        this.stocks = {
            "PEAR":new Stock("Pear Technology","PEAR",50.37,"Pear is an innovative technology company, maker of the Pear Home Computer","High","Low"),
            "GOLD":new Stock("Gold Investing!","GOLD",200.37,"GOLD IS LITERALLY A PRECIOUS METAL LMAO","High","Low")
        }
    }
    tick(){
        let keys = Object.keys(this.stocks);
        for(let i = 0;i<keys.length;i++){
            console.log(this.stocks[keys[i]]);
            this.stocks[keys[i]].tick();
        }
    }
    /*
    "stocks":{
        "PEAR":0
    }
    */
    netValue(stocks){
        let val = 0;
        let tickers = Object.keys(stocks);
        for(let i = 0;i < tickers.length;i++){
            let ticker = tickers[i];
            val = stocks[ticker] * this.stocks[ticker].price;
        }
        return val;
    }
}
export default Market;