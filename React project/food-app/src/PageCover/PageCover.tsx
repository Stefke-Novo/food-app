import "./PageCover.css";
import {Route,Switch,Link} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import AboutUs from "./AboutUs/AboutUs";
import ContentPage from "./ContentPage/ContentPage";
import Account from "./Account/Account";
import OrdersList from "../Classes/OrdersList";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import IOrdersList from "../Classes/IOrdersList";
import { useEffect, useState } from "react";
import IPurchase from "../Classes/IPurchase";
function PageCover(){
    let proizvodi:string[]=["Fruit","Vegetables"];
    let [ordersList,setOrdersList] = useState<IOrdersList>(new OrdersList());
    let [purchaseHistory,setPurchaseHistory]=useState<IPurchase[]>([]);
    let [totalSpentMoney,setTotalSpentMoney]=useState<number>(0);
    const MySwal = withReactContent(Swal);
    return(
        <div id="page-cover">
            <div>
                <ul className="menu">
                    <MenuComponent option="Main" link={"/"} needed={false}/>
                    <MenuComponent option="Products" link={"/products/products"} needed={true}>
                    {
                        proizvodi.map((proizvod:string)=>{
                            return(<MenuOption key={proizvod} link={`/products/${proizvod.toLowerCase()}`}>{proizvod}</MenuOption>)
                        })
                    }
                    </MenuComponent>
                    <MenuComponent option="About us" link={"/about-us"} needed={true}>
                        <MenuOption key={0} link={"/about-us#aboutCompany"}>About company</MenuOption>
                        <MenuOption key={2} link={"/about-us#question"}>Ask a question</MenuOption>
                        <MenuOption key={3} link={"/about-us#location"}>Location</MenuOption>
                    </MenuComponent>
                    <MenuComponent option="Account" needed={false} link={"/account"}/>
                </ul>
            </div>
            <Switch>
                <Route path={"/"} exact={true} render={(props:any)=><MainPage {...props}/>}/>
                <Route path={"/products/:content"}  exact={true} render={(props:any)=><ContentPage {...props} ordersList={ordersList} MySwal={MySwal} setOrdersList={setOrdersList}/>}/>
                <Route path={"/about-us"}  exact={true} render={(props:any)=><AboutUs {...props}/>} />
                <Route path={"/products/:content"}  exact={true} render={(props:any)=><ContentPage {...props} ordersList={ordersList} MySwal={MySwal} setOrdersList={setOrdersList}/>}/>
                <Route path={"/account"}  exact={true} render={(props:any)=>
                    <Account {...props} 
                    ordersList={ordersList} 
                    setOrdersList={setOrdersList} 
                    purchaseHistory={purchaseHistory} 
                    setPurchaseHistory={setPurchaseHistory} 
                    totalSpentMoney={totalSpentMoney} 
                    setTotalSpentMoney={setTotalSpentMoney}/>}/>
            </Switch>
            <footer>
                <ul>
                    <p>&copy; Copyright SuperProdavnica</p>
                </ul>
            </footer>
        </div>
    )
}
export default PageCover;
function MenuComponent(props:any){
    return(
        < >
        <li className="menu-option">
            <Link to={props.link===undefined?"#":props.link}>{props.option}</Link>
            {props.needed&&
            (<ul className="subMenu">
                {props.children}
            </ul>)
            }
        </li>
        </>
    )
}
function MenuOption(props:any){
    return(
        <Link to={props.link===undefined?"#":props.link}>
            <li className="subMenu-option" >{props.children}</li>
        </Link>
    )
}