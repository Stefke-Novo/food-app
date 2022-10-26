import express ,{Application,Request,Response}from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import pool from "./Databasebrocker/Databasebrocker";

const port:any = process.env.port||process.env.PORT||5000;
const apiRoot:string='/api';

const app:Application = express();

const router = express.Router();

//app configuration
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors({origin:/http:\/\/localhost/}))
app.use('*',cors());


app.get('/',(req:Request,res:Response)=>{
    res.send("Hello world");
})

app.get(apiRoot,(req:Request,res:Response)=>{
    res.send("Hello world");
})

app.listen(port,()=>{
    console.log(`Connected successfully on port ${port}`);
})