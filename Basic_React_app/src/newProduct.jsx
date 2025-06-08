import "./newProduct.css"

function NewProduct({name,image,desc,amount}) {
    let options=["fresh, ","durable, ","testy"];
    const list=options.map((options)=><li>{options}</li>)
    const isDiscount=amount>=100;
    let styles={backgroundColor:isDiscount ? "green":""};
    
    return(
       <div className="container" style={styles}>
            <h1 className="ProductName">{name}</h1>
            <img src={image} className="ProductImg" alt="" />
            <p className="ProductDesc">{desc}</p>
            <p className="list">options-{list}</p>
            <button className="btn amountbtn">price- ${amount}</button>
            <button className="btn addtocartbtn">Add to Cart</button>
            {isDiscount ? <p className="discount">Discount of 5%</p> :null }
       </div>
    );
}
export default NewProduct;