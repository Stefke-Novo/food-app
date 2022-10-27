import { MouseEvent } from "react";
import Account from "../../Classes/Account";
import IAccount from "../../Classes/IAccount";
import {Link, useHistory} from "react-router-dom";
import "./LogIn.css"
function LogIn(props:{
    logedInOrRegistered:boolean,
    setLogedInOrREgistered:React.Dispatch<React.SetStateAction<boolean>>
    account:IAccount,
    setAccount:React.Dispatch<React.SetStateAction<IAccount>>}){
    let {logedInOrRegistered,setLogedInOrREgistered,account,setAccount}=props;
    let accounts:Account[]=[
        new Account(1,"admin","admin","admin","admin",123),
        new Account(2,"Pera","Peric","pera","pera",432),
        new Account(3,"Mika","Mikic","mika","mika",534)
    ];
    const history = useHistory();
  
    const handleRoute = () =>{ 
      history.push("/app");
    }
    function verifyAccount(e: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        e.preventDefault();
        if(logedInOrRegistered){
            console.log("Account is already logged in");
            return;
        }
        accounts.forEach((a:IAccount)=>{
            if(account.username===a.username&&a.password===account.password){
                setAccount(a);
                setLogedInOrREgistered(true);
                handleRoute();
            }
        })
    }
    return(
        <div className="page logIn-page">
            <h1>Log in</h1>
            <form action="" className="logIn-form">
                <label htmlFor="">username:</label>
                <input type="text" value={account.username} onChange={(e)=>setAccount({...account,username:e.target.value})}/>
                <label htmlFor="">password</label>
                <input type="text" value={account.password} onChange={(e)=>setAccount({...account,password:e.target.value})}/>
                <button onClick={(e:any)=>verifyAccount(e)}>Log in</button>
                <div><p>You don't have account?</p> <Link to={"/register"}><span>Register</span></Link></div>
            </form>
        </div>
    )
}
export default LogIn;




