import "./item.css";
function Item({title,price}) {
    let options=["fast","slow","Durable"];
    return (
        <div className="item">

            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>features={options}</p>

        </div>
    );
}

export default Item;