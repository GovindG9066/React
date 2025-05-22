import "./item.css";
function Item({title,price}) {
    return (
        <div className="item">

            <h2>{title}</h2>
            <h3>{price}</h3>

        </div>
    );
}

export default Item;