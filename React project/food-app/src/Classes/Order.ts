import Food from "./Food";

export default class Order{
    public orderID:number;
    public food:Food;
    public price:number;
    constructor(orderID:number,food:Food,price:number){
        this.orderID=orderID;
        this.price=price;
        this.food=food;
    }
}