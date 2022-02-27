import Stock from "./stocks";
let history = {
    "PEAR":[1.41,2.57,1.91,1.75,2.09,2.56,2.86,3.89,4.23],
    "GOLP":[29.95,30.05,30.02,30.40,30.88,31.02,31.32,31.44,31.85]
};
class Market {
    constructor(){
        this.stocks = {
            "PEAR":new Stock("Pear Technology","PEAR",history["PEAR"][0],"Pear is an innovative technology company, maker of the Pear Home Computer","High","Low"),
            "GOLP":new Stock("Gold Investing!","GOLP",history["GOLP"][0],"GOLD IS LITERALLY A PRECIOUS METAL LMAO","High","Low")
        }
    }
    tick(time){
        let keys = Object.keys(this.stocks);
        for(let i = 0;i<keys.length;i++){
            console.log(this.stocks[keys[i]]);
            this.stocks[keys[i]].tick(time);
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