import Stock from "./stocks";
let history = {
    "PEAR":[1.41,2.57,1.91,1.75,2.09,2.56,2.86,3.89,4.23],
    "GOLP":[29.95,30.05,30.02,30.40,30.88,31.02,31.32,31.44,31.85],
    "BRWL":[14.02,14.14,14.80,13.75,10.32,12.26,12.20,13.77,15.08],
    "RASP":[7.66,7.89,8.43,8.97,7.68,6.02,5.76,5.44,5.10],
    "BIGM":[8.07,10.88,12.76,18.33,17.89,16.65,15.43,13.21,1.20],
    "CINH":[20.31,19.88,20.01,16.99,16.87,15.42,14.00,13.23,13.24],
    "PROF":[10.80,10.65,10.32,11.00,11.54,12.77,15.79,14.98,16.00],
    "JEFF":[39.10,43.08,42.71,43.35,40.79,45.47,41.30,49.60,58.83],
};
class Market {
    constructor(){
        this.stocks = {
            "PEAR":new Stock("Pear Technology","PEAR",history["PEAR"][0],"Pear is an innovative technology company, maker of the Pear Home Computer."),
            "GOLP":new Stock("Gold Investing!","GOLP",history["GOLP"][0],"Pete’s Gold is a commodity trader, allowing you to sell gold rather than shares in a company. It traditionally grows slowly, most as a guard against inflation."),
            "BRWL":new Stock("Brawlmart!","BRWL",history["BRWL"][0],"Brawlmart is a supermarket store catering to martial artists, boxers, and other people who enjoy hitting things."),
            "RASP":new Stock("Raspberry Technology!","RASP",history["RASP"][0],"Raspberry is a company that makes phones and portable music players, noted for their corporate design and sturdiness."),
            "BIGM":new Stock("BIG MONEY!","BIGM",history["BIGM"][0],"BigMoney is a mysterious company promising to double its earnings in only a few quarters, though hardly anyone knows what they actually sell..."),
            "CINH":new Stock("Cinema House!","CINH",history["CINH"][0],"Cinema House is a company that specializes in VHS and DVD renting for movies to watch at home. They’re an established company that have been around for quite some time with moderate success."),
            "PROF":new Stock("The Bank of Proffit!","PROF",history["PROF"][0],"This bank doesn’t just care about profits. It also cares about... costs? Banks are sometimes used for long-term investments due to their standard steady growth with the market."),
            "JEFF":new Stock("Johnson&Jeffery!","JEFF",history["JEFF"][0],"A massive medicine company, Johnson&James is working to keep everyone healthy... but mostly make money."),
        }
    }
    tick(time){
        let keys = Object.keys(this.stocks);
        for(let i = 0;i<keys.length;i++){
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