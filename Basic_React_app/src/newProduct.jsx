import "./newProduct.css"

function NewProduct({name,image,desc,amount}) {
    return(
       <div className="container">
            <h1 className="ProductName">{name}</h1>
            <img src={image} className="ProductImg" alt="" />
            <p className="ProductDesc">{desc}</p>
            <button className="btn amountbtn">price-{amount}</button>
            <button className="btn addtocartbtn">Add to Cart</button>
       </div>
    );
}
export default NewProduct;