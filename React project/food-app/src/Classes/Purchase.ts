import IPurchase from "./IPurchase";
import Order from "./Order";

export default class Purchase implements IPurchase{
    public ordersList: Order[];
    public date: Date;
    public price: number;
    constructor(ordersList:Order[],date:Date,price:number){
        this.ordersList=ordersList;
        this.date=date;
        this.price=price;
    }
    dateToString(): string {
        return this.date.getDate()+"."+this.date.getMonth()+"."+this.date.getFullYear()+".";
    }
}