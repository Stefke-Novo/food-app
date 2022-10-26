import { MouseEvent, useState } from "react";
import Food from "../../../Classes/Food";
import Order from "../../../Classes/Order";
import OrdersList from "../../../Classes/OrdersList";
import "./FoodCard.css";

function FoodCard(props:{food:Food,ordersList:OrdersList,MySwal:any,setOrdersList:Function}){
    let [amount,setAmount]=useState<number>(0);
    let {food,ordersList,MySwal,setOrdersList} = props;
    function addOrder(e: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        e.preventDefault();
        
        if(amount>0){
            setOrdersList({...ordersList,list:[...ordersList.list,new Order(ordersList.list.length+1,food,food.price*amount)]});
            MySwal.fire({
                icon: 'success',
                title: 'Order is successfuly added to your list',
                showConfirmButton: true,
              })
        }else{
            MySwal.fire({
                icon: 'error',
                title: 'Amount has to be \n greater than 0',
                showConfirmButton: false,
                timer: 1200
              })
        }
    }
    return(
        <div className="food-card-container">
            <h3>{food.name}</h3>
            <div>
                <img loading="lazy" src={food.image} alt="" />
            </div>
            <p> price: {food.price} &#8364; / {food.unit}</p>
            <h5>How much would you like to buy ?</h5>
            <input type="number" value={amount} onChange={(e:any)=>{setAmount(e.target.value)}}/>
            <button className="food-card-btn" onClick={(e:any)=>addOrder(e)}>Buy </button>
        </div>
    )
}
export default FoodCard;


