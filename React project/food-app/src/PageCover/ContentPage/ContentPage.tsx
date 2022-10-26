import "./ContentPage.css"
import {useParams} from "react-router-dom"
import Food from "../../Classes/Food";
import FoodCard from "./FoodCard/FoodCard";
import OrdersList from "../../Classes/OrdersList";
function ContentPage(props:any){
    let ordersList:OrdersList=props.ordersList;
    let setOrdersList=props.setOrdersList;
    let params:{content:string} = useParams();
    let data:Food[]=[
        new Food(1,"Apple","Fruit",2,"https://images.unsplash.com/photo-1589217157232-464b505b197f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80","kg"),
        new Food(2,"Avocado","Fruit",3,"https://images.unsplash.com/photo-1601039641847-7857b994d704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZvY2Fkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(3,"Banana","Fruit",1,"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80","kg"),
        new Food(4,"Blackberry","Fruit",4,"https://images.unsplash.com/photo-1562845029-d1b530d4cfd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","kg"),
        new Food(5,"Blueberry","Fruit",2,"https://images.unsplash.com/photo-1629843067854-de58946b9fe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJsdWViZXJyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(6,"Cherry","Fruit",3,"https://images.unsplash.com/photo-1610523377846-eba487f8f574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlcnJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(7,"Coconut","Fruit",1,"https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvY29udXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(8,"Gooseberry","Fruit",1,"https://images.unsplash.com/photo-1536522688983-1b3e2515adfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z29vc2ViZXJyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(9,"Grape","Fruit",1,"https://images.unsplash.com/photo-1596363505729-4190a9506133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(10,"Kiwifruit","Fruit",5,"https://images.unsplash.com/photo-1610917040803-1fccf9623064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2l3aWZydWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(11,"Lemon","Fruit",3,"https://images.unsplash.com/photo-1587496679742-bad502958fbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGVtb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(12,"Mango","Fruit",2,"https://images.unsplash.com/photo-1605027990121-cbae9e0642df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(13,"Melon","Fruit",4,"https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(14,"Cantaloupe","Fruit",5,"https://images.unsplash.com/photo-1660255940874-9b1650e95688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbnRhbG91cGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(15,"Watermelon","Fruit",2,"https://images.unsplash.com/photo-1621961048737-a9993789e1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJtZWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(16,"Nectarine","Fruit",1,"https://images.unsplash.com/photo-1628364251782-52941ea94dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmVjdGFyaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(17,"Orange","Fruit",4,"https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(19,"Mandarine","Fruit",2,"https://images.unsplash.com/photo-1572530701069-e9cd0549358f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuZGFyaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"), 
        new Food(20,"Pineapple","Fruit",3,"https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(21,"Raspberry","Fruit",6,"https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFzcGJlcnJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(22,"Aubergene (eggplant)","Vegetables",2,"https://images.unsplash.com/photo-1528826007177-f38517ce9a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXViZXJnZW5lJTIwKGVnZ3BsYW50KXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","unit"),
        new Food(23,"Beet","Vegetables",6,"https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","unit"),
        new Food(24,"Bok Choy","Vegetables",7,"https://images.unsplash.com/photo-1601091760588-b9cf83b19297?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9rJTIwY2hveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","unit"),
        new Food(25,"Broccoli","Vegetables",4,"https://images.unsplash.com/photo-1583663848850-46af132dc08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnJvY2NvbGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(26,"Broccolini","Vegetables",5,"https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F9fe7642f98f85120ca3a109d5f098e616a60e3f2","kg"),
        new Food(27,"Broccoli Raab","Vegetables",7,"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJyb2Njb2xpJTIwcmFhYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(28,"Brussels","Vegetables",3,"https://images.unsplash.com/photo-1438118907704-7718ee9a191a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJydXNzZWxzJTIwdmVnZXRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(29,"Sprouts","Vegetables",5,"https://plus.unsplash.com/premium_photo-1661438537669-e7bcaf783de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80","unit"),
        new Food(30,"Chinese Cabbage","Vegetables",12,"https://www.tasteofhome.com/wp-content/uploads/2019/04/Chinese-cabbage-shutterstock_279244529.jpg","unit"),
        new Food(31,"Green Cabbage","Vegetables",4,"https://images.unsplash.com/photo-1531818225254-1bbca6ab9210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbmVzZSUyMGNhYmJhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(32,"Purple Cabbage","Vegetables",6,"https://plus.unsplash.com/premium_photo-1661293858820-1d1fa60c0d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVycGxlJTIwY2FiYmFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(33,"Savoy Cabbage","Vegetables",9,"https://images.unsplash.com/photo-1594282486756-06f49bb34c05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2F2b3klMjBjYWJiYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(34,"Carrots","Vegetables",9,"https://plus.unsplash.com/premium_photo-1661875719416-f2b30e95ea4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fycm90c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(35,"Cauliflower","Vegetables",8,"https://images.unsplash.com/photo-1566842600175-97dca489844f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(36,"Celeriac","Vegetables",4,"https://images.unsplash.com/photo-1575286368486-a9bd023a3d1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsZXJpYWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(37,"Celery","Vegetables",11,"https://images.unsplash.com/photo-1601459427108-47e20d579a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2VsZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","unit"),
        new Food(38,"Chard (Red and Swiss)","Vegetables",6,"https://www.specialtyproduce.com/sppics/530.png","unit"),
        new Food(39,"Chicory","Vegetables",8,"https://www.bolster.eu/media/images/2050_2.jpg?1549350221","kg"),
        new Food(40,"Corn Cress","Vegetables",3,"http://cdn.shopify.com/s/files/1/0557/3378/0664/products/GardenCressSquare.png?v=1645285266","unit"), 
        new Food(41,"Cucumbers","Vegetables",10,"https://images.unsplash.com/photo-1604977042946-1eecc30f269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGN1Y3VtYmVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(42,"Daikon","Vegetables",5,"https://www.allrecipes.com/thmb/RBqltz9CD_oWILQTYWFxmmQN7sI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-454629217-2000-3bb4cb38ad964e4d887aa47c9584abd0.jpg","unit"),
        new Food(43,"Garlic","Vegetables",7,"https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FybGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(44,"Green Beans","Vegetables",10,"https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBiZWFuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(45,"Greens","Vegetables",4,"https://images.unsplash.com/photo-1553536645-f83758b55d23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60","unit"),
        new Food(46,"Colland Greens","Vegetables",8,"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Collard-Greens-Bundle.jpg/800px-Collard-Greens-Bundle.jpg","kg"),
        new Food(47,"Mustard Greens","Vegetables",5,"https://cdn2.stylecraze.com/wp-content/uploads/2021/08/Mustard-Greens-Nutrition-Profile-And-Health-Benefits.jpg.webp","unit"), 
        new Food(48,"Kale","Vegetables",11,"https://images.unsplash.com/photo-1624300477446-d379e923eca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2FsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60","kg"),
        new Food(49,"Kohlrabi","Vegetable",8,"https://images.unsplash.com/photo-1592868490948-4722f1805f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a29obHJhYml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","kg")
    ];
    return (
        <div className="page">
            <h2 id="cocntent-page-h2">{params.content.toLocaleLowerCase()}</h2>
            <div className="content-list">
                {
                    data.map((food:Food)=>{
                        if(params.content==="vegetables"&&food.category==="Vegetables")
                        return(<FoodCard key={food.foodID} food={food} ordersList={ordersList} MySwal={props.MySwal} setOrdersList={setOrdersList}/>)
                        if(params.content==="fruit"&&food.category==="Fruit")
                        return(<FoodCard key={food.foodID} food={food} ordersList={ordersList} MySwal={props.MySwal} setOrdersList={setOrdersList}/>)
                        if(params.content==="products")
                        return(<FoodCard key={food.foodID} food={food} ordersList={ordersList} MySwal={props.MySwal} setOrdersList={setOrdersList}/>)
                        return <div key={Math.random()}></div>
                    })
                }
            </div>
        </div>
    )
}
export default ContentPage;