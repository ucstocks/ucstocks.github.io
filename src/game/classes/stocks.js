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
class Stock{
    constructor(name,ticker,price,description){
        this.name = name;
        this.ticker = ticker;
        this.price = price;
        this.previousPrice = price;
        this.description = description;
    }
    tick(time){
        this.previousPrice = this.price;
        this.price = history[this.ticker][time];
    }
}
export default Stock;