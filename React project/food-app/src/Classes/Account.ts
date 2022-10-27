import IAccount from "./IAccount";

export default class Account implements IAccount{
    public accountID:number;
    public name:string;
    public surname:string;
    public username:string;
    public password:string;
    public totalSpentMoney:number;
    constructor(accountID:number,name:string,surname:string,username:string,password:string,totalSpentMoney:number){
        this.accountID=accountID;
        this.name=name;
        this.surname=surname;
        this.username=username;
        this.password=password;
        this.totalSpentMoney=totalSpentMoney;
    }
}