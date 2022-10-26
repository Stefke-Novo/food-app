import IOrdersList from "./IOrdersList";
import Order from "./Order";

export default class OrdersList implements IOrdersList{
    list:Order[];
    constructor(){
        this.list=[];
    }
    //add new element to a list
    addOrder(order:Order){
        this.list.push(order);
    }
    //remove an element from a list
    removeOrder(order:Order){
        this.list=this.list.filter(ord=>ord!==order);
    }
    //get an element from list
    getOrder(index:number):Order{
        return this.list[index];
    }
    //change a specific element
    changeOrder(ordersList:OrdersList,order:Order){
        let i:number;
        let order1:Order|undefined=ordersList.list.find(ord=>ord===order);
        if(order1===undefined){
            return "The food doesn't exist in list";
        }else{
            i=ordersList.list.indexOf(new Order(order1?.orderID,order1?.food,order1?.price));
            ordersList.list[i]=order;
        }
    }
    returnListPrice():number{
        let price:number=0;
        this.list.forEach(order=>{
            price+=order.price;
        })
        return price;
        
    }
    changeList(ordersList:Order[]){
        this.list=ordersList;
    }
    getList(){
        return this.list;
    }
    setList(orders:Order[]){
        this.list=orders;
    }
}