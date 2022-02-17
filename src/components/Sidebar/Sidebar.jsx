import "./Sidebar.scss"
import {Link} from "react-router-dom"
import Logo from "../../assets/img/Logo.png"
import Home from "../../Lib/Svgs/Home";
import Discount from "../../Lib/Svgs/Discount";
import Dashboard from "../../Lib/Svgs/Dashboard";
import Notification from "../../Lib/Svgs/Notification";
import Settings from "../../Lib/Svgs/Settings";
import Massages from "../../Lib/Svgs/Massages";
import Logout from "../../Lib/Svgs/Logout";

function Sidebar() {
    function add(evt) {
        // console.log(evt.currentTarget);
        const removeActive = document.querySelectorAll(".link-active")
        removeActive.forEach((link)=>{
            link.classList.remove("link-active")
        })
        evt.currentTarget.classList.add("link-active")
    }
    
    return(
        <div className="sidebar">
            <Link to="/" className="logo">
                <img  src={Logo} alt="" />
            </Link>
            <ul className="sidebar__list">
            <li className="sidebar-list__item">
                    <Link className="link link-active" to="/" onClick={add}>
                        <span>
                        <Home></Home>
                        </span>
                    </Link>
                </li>
                <li className="sidebar-list__item" >
                    <Link className="link" to="/discount" onClick={add}>
                        <span>
                        <Discount></Discount>
                        </span>
                    </Link>
                </li>
                <li className="sidebar-list__item">
                    <Link className="link" to="/dashboard" onClick={add}>
                        <span>
                            <Dashboard></Dashboard>
                        </span>
                    </Link>
                </li>
                <li className="sidebar-list__item">
                    <Link className="link" to="/massage" onClick={add}>
                        <span>
                            <Massages></Massages>
                        </span>
                    </Link>
                </li>
                <li className="sidebar-list__item">
                    <Link className="link" to="/notification" onClick={add}>
                        <span>
                            <Notification></Notification>
                        </span>
                    </Link>
                </li>
                <li className="sidebar-list__item">
                    <Link className="link" to="/settings" onClick={add}>
                        <span>
                            <Settings></Settings>
                        </span>
                    </Link>
                </li>
            </ul>
            <button className="sidebar__btn"><Logout></Logout></button>
        </div>
    )
}
export default Sidebar;