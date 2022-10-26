import Order from "./Order";

export default interface IPurchase{
    ordersList:Order[];
    date:Date;
    price:number;
    dateToString():string;
}