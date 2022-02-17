import "./Foodbox.scss"

function Foodbox({title, available, price, onClick}) {
    return(
        <li onClick={onClick}>
            <img src="https://picsum.photos/150" alt="food" width="150" height="150" />
            <h3>{title}</h3>
            <p>$ {price}</p>
            <p>{available}</p>
        </li>
    )
}
export default Foodbox;