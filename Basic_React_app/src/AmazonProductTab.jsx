import "./AmazonProductTab.css"
function AmazonProductTab({Name,desc1,desc2,oldprice,newprice}) {
    return(
        <div className="APT">
            <div className="DESC">
                <h2 className="product-title">{Name}</h2>
                <ul className="descList">
                    <li>{desc1}</li>
                    <li>{desc2}</li>
                </ul>
            </div>
            <div className="price">
                <del>${oldprice}</del> <span className="newPrice"><b>${newprice}</b></span> 
            </div>
        </div>
    );
}

export default AmazonProductTab;