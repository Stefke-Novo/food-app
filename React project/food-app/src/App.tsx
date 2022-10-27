import './App.css';
import PageCover from './PageCover/PageCover';
import {Switch,Route, Redirect} from "react-router-dom";
import LogIn from './LogIn&Register/LogIn/LogIn';
import Register from './LogIn&Register/Register/Register';
import { useEffect, useState } from 'react';
import IAccount from './Classes/IAccount';
import Account from './Classes/Account';
function App() {
  let [logedInOrRegistered,setLogedInOrregistered]=useState<boolean>(false);
  let [account,setAccount]=useState<IAccount>(new Account(0,"","","","",0));
  useEffect(()=>{
    console.log(account)
  },[account])
  return (
      <>
        <Switch>
          <Route path={"/app"}>
            <PageCover 
              account={account} 
              setAccount={setAccount}
              logedInOrRegistered={logedInOrRegistered}
              setLogedInOrRegistered={setLogedInOrregistered}
              />
          </Route>
        <Route path={"/login"}  exact={true} render={(props)=>
        <LogIn {...props} 
        logedInOrRegistered={logedInOrRegistered} 
        setLogedInOrREgistered={setLogedInOrregistered}
        account={account}
        setAccount={setAccount}/>}/>
        <Route path={"/app"||"/app/*"} exact={false} >
          {
          logedInOrRegistered===false? (<Redirect to="/login"/>) : (<Redirect to="/app"/>)
          }
        </Route>
        <Route path={"/register"} exact={true} render={
            (props)=>
            <Register {...props} 
            logedInOrRegistered={logedInOrRegistered} 
            setLogedInOrRegistered={setLogedInOrregistered}
            account={account}
            setAccount={setAccount}
            />}
        />
        </Switch>
      </>
  );
}

export default App;
