import "./Home.scss"
import { Link } from "react-router-dom";
import { Switch, Route, useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../../context/orderFoods";
import Orders from "../../components/Orders/Orders";
import Foodbox from "../../components/Foodbox/Foodbox";
import Api from "../../components/Api/Api";

function Home() {

function add(evt) {
console.log(evt.currentTarget);
const removeActive = document.querySelectorAll(".home-link")
removeActive.forEach((link)=>{
link.classList.remove("home-link")
})
evt.currentTarget.classList.add("home-link")
}
return(
<div className="home">
    <div className="home__content">
        <div className="home__content-top">
            <div>
                <h2>Jaegar Resto</h2>
                <p>Tuesday, 2 Feb 2021</p>
            </div>
            <input type="search" placeholder="Search for food, coffe, etc.." />
        </div>
        <ul className="home-list">
            <li>
                <Link to="/" className="home-link" onClick={add}>Hot Dishes</Link>
            </li>
            <li>
                <Link to="/cold-dishes" onClick={add}>Cold Dishes</Link>
            </li>
            <li>
                <Link to="/soup" onClick={add}>Soup</Link>
            </li>
            <li>
                <Link to="/grill" onClick={add}>Grill</Link>
            </li>
            <li>
                <Link to="/appetizer" onClick={add}>Appetizer</Link>
            </li>
            <li>
                <Link to="/dessert" onClick={add}>Dessert</Link>
            </li>
        </ul>
        <div className="hot-dishes__top">
            <h2>HotDishes</h2>
            <select className="form-select">
                <option value="0">DineIn</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <Switch>
            <Route path="/:foodtype" component={FoodList}></Route>
            <Route path="/" component={FoodList}></Route>
        </Switch>
    </div>
    <Orders></Orders>
</div>
)
}

function FoodList() {
const {foodtype}= useParams();
const {orderFoods, setOrderFoods}= useContext(Context);
return(
<>
    {Api.length > 0 &&
    <ul className="hot-dishes__list" >
        {Api.filter((food=> {if(foodtype){
            return food.type === foodtype
        }
        return food.type === "cold-dishes"
    })).map((food)=>
        <Foodbox key={food.id}
        title={food.title}
        price={food.price}
        available={food.available}
        onClick={(e)=> {
            const foundFood =Api.find((ovqat)=> ovqat.id === food.id);
            foundFood.number = foundFood.number ? foundFood.number + 1 : 1
            setOrderFoods([...orderFoods, foundFood])
        }}/>)}
    </ul>
    }
</>
)
}
export default Home;