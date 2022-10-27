import { useState } from "react";
import { useHistory } from "react-router-dom";
import IAccount from "../../Classes/IAccount";
import "./Register.css"
function Register(props:{
    logedInOrRegistered:boolean,
    setLogedInOrRegistered:React.Dispatch<React.SetStateAction<boolean>>,
    account:IAccount,
    setAccount:React.Dispatch<React.SetStateAction<IAccount>>
    }){

    let {logedInOrRegistered,setLogedInOrRegistered,account,setAccount}=props;
    let [confirmPassword,setConfirmPassword]=useState<string>("");
    const history = useHistory();
  
    const handleRoute = () =>{ 
        history.push("/app");
    }
    function registerUser(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();
        let registeredUser:boolean=
        account.name.length>0&&
        account.surname.length>0&&
        account.username.length>0&&
        account.password.length>0;
        if(logedInOrRegistered){
            console.log("user is already registered");
            return;
        }
        if(registeredUser&&confirmPassword===account.password){
            setLogedInOrRegistered(true);
            handleRoute();
        }
    }
    return(
        <div className="register-page">
            <h1>Register</h1>
            <form action="" className="register-form">
                <label htmlFor="">First Name:</label>
                <input type="text" value={account.name} onChange={(e)=>setAccount({...account,name:e.target.value})}/>
                <label htmlFor="">Surname:</label>
                <input type="text" value={account.surname} onChange={(e)=>setAccount({...account,surname:e.target.value})}/>
                <label htmlFor="">Username:</label>
                <input type="text" value={account.username} onChange={(e)=>setAccount({...account,username:e.target.value})}/>
                <label htmlFor="">Password:</label>
                <input type="text" value={account.password} onChange={(e)=>setAccount({...account,password:e.target.value})} />
                <label htmlFor="">Confirm password</label>
                <input type="text" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <button onClick={(e)=>registerUser(e)}>Register</button>
            </form>
        </div>
    )
}
export default Register;