import "./Register.css"
function Register(props:{logedInOrRegistered:boolean,setLogedInOrREgistered:React.Dispatch<React.SetStateAction<boolean>>}){

    let {logedInOrRegistered,setLogedInOrREgistered}=props;

    return(
        <div>
            <h1>Register page</h1>
        </div>
    )
}
export default Register;