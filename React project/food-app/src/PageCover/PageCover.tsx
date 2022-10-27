import "./PageCover.css";
import {Route,Link, useRouteMatch} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import AboutUs from "./AboutUs/AboutUs";
import ContentPage from "./ContentPage/ContentPage";
import Account from "./Account/Account";
import OrdersList from "../Classes/OrdersList";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import IOrdersList from "../Classes/IOrdersList";
import { useState } from "react";
import IPurchase from "../Classes/IPurchase";
import IAccount from "../Classes/IAccount";
function PageCover(props:{
    account:IAccount,
    setAccount:React.Dispatch<React.SetStateAction<IAccount>>,
    logedInOrRegistered:boolean,
    setLogedInOrRegistered:React.Dispatch<React.SetStateAction<boolean>>}){
    let {account,setAccount,logedInOrRegistered,setLogedInOrRegistered}=props;
    let { path, url } = useRouteMatch();
    let proizvodi:string[]=["Fruit","Vegetables"];
    let [ordersList,setOrdersList] = useState<IOrdersList>(new OrdersList());
    let [purchaseHistory,setPurchaseHistory]=useState<IPurchase[]>([]);
    let [totalSpentMoney,setTotalSpentMoney]=useState<number>(0);
    const MySwal = withReactContent(Swal);
    return(
        <div id="page-cover">
            <div>
                <ul className="menu">
                    <MenuComponent option="Main" link={`${url}`} needed={false} children={undefined}/>
                    <MenuComponent option="Products" link={`${url}/products/products`} needed={true}>
                    {
                        proizvodi.map((proizvod:string)=>{
                            return(<MenuOption key={proizvod} link={`${url}/products/${proizvod.toLowerCase()}`}>{proizvod}</MenuOption>)
                        })
                    }
                    </MenuComponent>
                    <MenuComponent option="About us" link={`${url}/about-us`} needed={true}>
                        <MenuOption key={0} link={`${url}/about-us#aboutCompany`}>About company</MenuOption>
                        <MenuOption key={2} link={`${url}/about-us#question`}>Ask a question</MenuOption>
                        <MenuOption key={3} link={`${url}/about-us#location`}>Location</MenuOption>
                    </MenuComponent>
                    <MenuComponent option="Account" needed={false} link={`${url}/account`} children={undefined}/>
                </ul>
            </div>
                <Route path={`${path}`} exact={true} render={(props:any)=>(<MainPage {...props}/>)}/>
                <Route path={`${path}/products/:content`} exact={true} render={(props:any)=>(<ContentPage {...props} ordersList={ordersList} MySwal={MySwal} setOrdersList={setOrdersList}/>)}/>
                <Route path={`${path}/about-us`}  render={(props:any)=>(<AboutUs {...props}/>)} />
                {/* <Route path={`${path}/products/:content`} render={(props:any)=><ContentPage {...props} ordersList={ordersList} MySwal={MySwal} setOrdersList={setOrdersList}/>}/> */}
                <Route path={`${path}/account`} render={(props:any)=>
                    (<Account {...props} 
                    ordersList={ordersList} 
                    setOrdersList={setOrdersList} 
                    purchaseHistory={purchaseHistory} 
                    setPurchaseHistory={setPurchaseHistory} 
                    totalSpentMoney={totalSpentMoney} 
                    setTotalSpentMoney={setTotalSpentMoney}
                    account={account}
                    setAccount={setAccount}
                    logedInOrRegistered={logedInOrRegistered}
                    setLogedInOrRegistered={setLogedInOrRegistered}
                    />)}/>
                    <Route path={`${path}/str1`} >
                        <div>
                            <h1>Str1</h1>
                        </div>
                    </Route>
            <footer>
                <ul>
                    <p>&copy; Copyright SuperProdavnica</p>
                </ul>
            </footer>
        </div>
    )
}
export default PageCover;
function MenuComponent(props:{link:string,option:string,needed:boolean,children:any}){
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