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