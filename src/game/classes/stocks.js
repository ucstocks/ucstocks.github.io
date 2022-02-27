let history = {
    "PEAR":[1.41,2.57,1.91,1.75,2.09,2.56,2.86,3.89,4.23],
    "GOLP":[29.95,30.05,30.02,30.40,30.88,31.02,31.32,31.44,31.85]
};
class Stock{
    constructor(name,ticker,price,description,marketCap,priceExpense){
        this.name = name;
        this.ticker = ticker;
        this.price = price;
        this.previousPrice = price;
        this.description = description;
        this.marketCap = marketCap;
        this.priceExpense = this.priceExpense;
    }
    tick(time){
        this.previousPrice = this.price;
        this.price = history[this.ticker][time];
    }
}
export default Stock;