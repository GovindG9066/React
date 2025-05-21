import Product from "./product";
import "./ProductTab.css"
function ProductTab(){
    return(
        <div className="ProductTab">
        <Product />
        <Product />
        <Product />
        <Product />
        </div>
    );
}

export default ProductTab;