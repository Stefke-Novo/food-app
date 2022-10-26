import "./LogIn.css"
function LogIn(props:{logedInOrRegistered:boolean,setLogedInOrREgistered:React.Dispatch<React.SetStateAction<boolean>>}){
    let {logedInOrRegistered,setLogedInOrREgistered}=props;
    return(
        <div>
            <h1>Log in page</h1>
        </div>
    )
}
export default LogIn;