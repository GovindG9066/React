import Product from "./product";
import "./ProductTab.css"
function ProductTab(){
    return(
        <div className="ProductTab">
        <Product title="Pen" price="10" />
        <Product title="laptop" price={50000}/>
        <Product title="Phone" price="10000"/>
        <Product title="book" price="50"/>
        </div>
    );
}

export default ProductTab;