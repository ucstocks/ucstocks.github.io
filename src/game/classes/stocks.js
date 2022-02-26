let history = [{
    "PEAR":[1.41,2.57,1.91,1.75,2.09,2.56,2.86,3.89,4.23]
}];
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
    tick(){
        this.previousPrice = this.price;
        this.price += Math.random() * this.price * 0.01;
    }
}
export default Stock;