import Order from "./Order";

export default interface IOrdersList{
    list:Order[];
    addOrder(order:Order):void;
    removeOrder(order:Order):void;
    getOrder(index:number):Order;
    returnListPrice():number;
    changeList(ordersList:Order[]):void;
    getList():Order[];
    setList(orders:Order[]):void;
}