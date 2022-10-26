import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from "react";
import IOrdersList from "../../Classes/IOrdersList";
import IPurchase from "../../Classes/IPurchase";
import Order from "../../Classes/Order";
import Purchase from "../../Classes/Purchase";
import "./Account.css";

function Account(
        props:{
            ordersList:IOrdersList,
            setOrdersList:Dispatch<SetStateAction<IOrdersList>>,
            purchaseHistory:IPurchase[],
            setPurchaseHistory:Dispatch<SetStateAction<IPurchase[]>>,
            totalSpentMoney:number,
            setTotalSpentMoney:Dispatch<SetStateAction<number>>
        }
    ){
    let {ordersList,setOrdersList,purchaseHistory,setPurchaseHistory,totalSpentMoney,setTotalSpentMoney} = props;
    let [totalPrice,setTotalPrice]=useState<number>(0);
    useEffect(()=>{
        let sum:number=0;
        ordersList.list.forEach((order:Order) => {
            sum+=order.price;
        });
        setTotalPrice(sum);
    },[ordersList,ordersList.list])
    function changeList(e: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        e.preventDefault();
        setOrdersList({...ordersList,list:[]});
    }
    function returnListPrice(list:Order[]):number{
        let price:number=0;
        list.forEach((order:Order)=>{
            price+=order.price;
        })
        return price;
        
    }
    function addToPurchaseHistory(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        if(returnListPrice(ordersList.list)===0)
         return;
        setPurchaseHistory([...purchaseHistory,new Purchase(ordersList.list,new Date(),returnListPrice(ordersList.list))]);
        setOrdersList({...ordersList,list:[]});
        setTotalSpentMoney(totalSpentMoney+returnListPrice(ordersList.list));
    }
    return(
        <div className="page account-page">
            <h1>Account</h1>
            <div className="account-and-ordersList">
                <div className="account-info">
                <h2>Account info</h2>
                    <div>
                            <img src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg" alt="account" />
                    </div>
                    <p>
                        Name: <br />
                        Surname: <br />
                        username: <br />
                        Spent money:&ensp; {totalSpentMoney} &euro;
                    </p>

                </div>
                <div className="account-list">
                    <h2>List for today</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Food name</th>
                                <th>Food price</th>
                                <th>Change</th>
                                <th>remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ordersList.list.map((order:Order)=>{
                                    return(
                                    <tr key={order.orderID}>
                                        <td>{order.food.name}</td>
                                        <td>{order.price} &euro;</td>
                                        <td><button>change</button></td>
                                        <td><button>remove</button></td>
                                    </tr>
                                )})
                            }
                            <tr>
                                <td><b>Total price</b></td>
                                <td>{totalPrice} &euro;</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Buy products on the list?</h3>
                    <div className="account-options">
                        <button onClick={(e:any)=>addToPurchaseHistory(e)} >Yes</button>
                        <button onClick={(e:any)=>changeList(e)}>No</button>
                    </div>
                </div>
            </div>
            <div className="account-shopping-history">
                <h2>Shopping history</h2>
                <table>
                    <thead>
                        <tr>
                            <th>purchase date</th>
                            <th>price</th>
                            <th>purchase details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        purchaseHistory.map((purchase:IPurchase,i:number)=>(
                            <tr key={i}>
                                <td>{purchase.dateToString()}</td>
                                <td>{purchase.price} &euro;</td>
                                <td><button onClick={(e:any)=>{e.preventDefault();console.table(purchase.ordersList)}}>more details</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Account;


