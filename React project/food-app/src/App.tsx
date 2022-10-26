import './App.css';
import PageCover from './PageCover/PageCover';
import {Switch,Route, Redirect} from "react-router-dom";
import LogIn from './LogIn&Register/LogIn/LogIn';
import Register from './LogIn&Register/Register/Register';
import { useState } from 'react';
function App() {
  let [logedInOrRegistered,setLogedInOrregistered]=useState<boolean>(false);
  return (
      <>
        <Switch>
        <Route path={"/login"}  exact={true} render={()=><LogIn logedInOrRegistered={logedInOrRegistered} setLogedInOrREgistered={setLogedInOrregistered}/>}/>
          <Route 
            path={"/"} 
            exact={true} 
            render={()=>logedInOrRegistered==false?
            // <div><h1 style={{textAlign:"center"}}>Error 404 not found</h1></div>
            <Redirect to="/login"/>
            :
            <PageCover/>}/>
          <Route path={"/register"} exact={true} render={()=><Register logedInOrRegistered={logedInOrRegistered} setLogedInOrREgistered={setLogedInOrregistered}/>}/>
        </Switch>
      </>
  );
}

export default App;
