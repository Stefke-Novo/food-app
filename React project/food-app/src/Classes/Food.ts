export default class Food{
    foodID:number;
    name:string;
    category:string;
    price:number;
    image:string;
    unit:string;

    constructor(foodID:number,name:string,cateogry:string,price:number,image:string,unit:string){
        this.foodID=foodID;
        this.name=name;
        this.category=cateogry;
        this.price=price;
        this.image=image;
        this.unit=unit;
    }
}