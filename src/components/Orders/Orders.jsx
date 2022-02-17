import "./Orders.scss"
import { useContext } from "react";
import { Context } from "../../context/orderFoods";
import Remove from "../../Lib/Svgs/Remove";


function Orders() {
const {orderFoods, setOrderFoods}= useContext(Context)
const uniqle =[...new Set(orderFoods)]
return(
    <div className="home-orders">
    <h2>Orders #34562</h2>
    <ul className="order-nav">
        <li><button>Dine In</button></li>
        <li><button>To Go</button></li>
        <li><button>Delivery</button></li>
    </ul>
    <ul className="order-list">
        { uniqle.map((food) => (
             <li className="order-list__item" key={food.id}>
             <div className="order-item__left">
                 <div className="item-left__top">
                     <img src={food.img} alt="" width="43" height="43"/>
                     <div>
                         <h5>{food.title}</h5>
                         <em>$ {food.price}</em>
                     </div>
                     <span>{food.number}</span>
                 </div>
                 <input type="text" placeholder="Please, just a little bit spicy only." />
             </div>
             <div className="order-item__right">
                 <em>$ - {food.price * food.number}</em>
                 <button onClick={()=>setOrderFoods(orderFoods.filter((ovqat)=> ovqat.id !== food.id))}>
                     <Remove></Remove>
                 </button>
             </div>
         </li>
        ))}
    </ul>
</div>
)
}
export default Orders;