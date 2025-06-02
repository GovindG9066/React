import "./item.css";
function Item({title,price,feature}) {
    // let options=["fast","slow","Durable"];
    let list=feature.map=((feature)=><li>{feature}</li>)
    return (
        <div className="item">

            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>features={list}</p>

        </div>
    );
}

export default Item;