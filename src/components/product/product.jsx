import React from "react";
import "../product/product.css"
const Product = (props) => {
    return (
        <div className="main-flex">
            <img src= {props.img} alt="img" />
            <div>   
            <h4>{props.name}</h4>
            <div className="flex-2">
            <div>
                <p>By:{props.by}</p>
                <p>Price:{props.price}</p>
                <p>Stock:{props.stock}</p>
                <button>Add To Cart</button>
            </div>
             <h4>Features</h4>
            </div>
            </div>
        </div>
    )
}

export default Product;