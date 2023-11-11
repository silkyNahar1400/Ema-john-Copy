import React, { useState, useEffect } from "react";
import "./shop.css";
import products from "../../products.json"
import Product from "../product/product";


const Shop = () => { 
    
    return(<div className="shop-container" > 

    <div className="product-container">
    {products && products.map(data =>{ 
        return (
           <Product
           name = {data.name}
           price = {data.price}
           img = {data.img}
           by = {data.seller}
           stock = {data.stock}
           />        
    )
    })}

    </div>
    <div className="cart-container">
        <h1>This is Cart</h1>
    </div>

     </div> 
     )} 


export default Shop;