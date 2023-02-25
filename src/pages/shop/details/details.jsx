import React, { useState,useContext } from 'react';
import { ShopContext } from "../../../context/shop-context";
import "./details.css"
import { useNavigate } from "react-router-dom";

export const Details = () => {
    const id = window.location.pathname.slice(10); //get product id from current url
    const { products,addToCart,cartItems } = useContext(ShopContext);
    const currentProduct = products.find(p=>p.id===id);
    const navigate = useNavigate();
    const cartItemCount = cartItems[id];
    
    return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img src={currentProduct.image.url} className="product-detail-image" />
                </div>
            </div>
            <div className="product-detail-desc">
                <h1>{currentProduct.name}</h1> 
                <p className="price">{currentProduct.price.formatted_with_symbol}</p>
                <div className="buttons">
                    {/* <button type="button" className="add-to-cart" onClick={() => addToCart(id)}>Add to Cart</button> */}
                    <button type="button" className="add-to-cart" onClick={() => addToCart(id)}>
                        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                    </button>
                    <button type="button" className="buy-now" onClick={() => navigate("/")}>Go Back to shop</button>
                    
                </div>
                <h4>Details: </h4>
                
                <p>{currentProduct.description.slice(3,-4)}</p>
            </div>
        </div> 

        
    </div>
  )
}



