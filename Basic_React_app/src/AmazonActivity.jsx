import "./AmazonActivity.css"
import AmazonProductTab from "./AmazonProductTab";

function AmazonActivity() {
    return(
        <div className="AmazonContainer">
                <h3>Shop Now</h3>
                <div className="APT-Container">
                <AmazonProductTab Name="Logitech MX Master 3S" desc1="8,000 DPI" desc2="5 Programmable Buttons" oldprice={12000} newprice={8000}/>
                <AmazonProductTab Name="Apple pencil (2nd Gen)" desc1="Intuitive touch surface" desc2="Designed for iPad Pro" oldprice={11900} newprice={9199}/>
                <AmazonProductTab Name="Logitech MX Master 3S" desc1="Intutive touch surface" desc2="Designed for iPad Pro" oldprice={1599} newprice={899}/>
                <AmazonProductTab Name="Logitech MX Master 3S" desc1="Wireless Mouse 2.4 GHz" desc2="Optical Orientation" oldprice={599} newprice={278}/>
                </div>
        </div>
    );
}
export default AmazonActivity;