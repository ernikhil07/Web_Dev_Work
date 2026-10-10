import "./product.css";
import Price from "./price.jsx";
function Product({title,idx}){
    let oldPrices = ["122","495","11900","599"];
    let newPrices = ["100","395","10000","400"];
    let description=[
        ["8000 DPI","5programmable buttons"],
        ["intutive surface","designed for ipad pro"],
        ["designed for iPad Pro","intutive surface"],
        ["wireless","optical orentation"],
    ];
    return(
        <div className="product">
            <h4>{title}</h4>
           <p>{description[idx][0]}</p>
           <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;