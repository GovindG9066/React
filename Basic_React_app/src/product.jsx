import ProductTab from "./ProductTab";

function Product({title,price}){
    return(
        <div className="product">
        <h3>{title}</h3>
        <h4>price:{price}</h4>
        </div>
    );
}

export default Product;