import "./newProduct.css"

function NewProduct({name,image,desc,amount}) {
    let options=["fresh, ","durable, ","testy"];
    return(
       <div className="container">
            <h1 className="ProductName">{name}</h1>
            <img src={image} className="ProductImg" alt="" />
            <p className="ProductDesc">{desc}</p>
            <p>options-{options}</p>
            <button className="btn amountbtn">price-{amount}</button>
            <button className="btn addtocartbtn">Add to Cart</button>
       </div>
    );
}
export default NewProduct;