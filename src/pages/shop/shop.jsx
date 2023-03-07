import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Product } from "./product"; 
import "./shop.css";


export const Shop = () => {   
  
  const { products } = useContext(ShopContext);
  
  return (
    <div className="shop">
      <div className="shopTitle">
        <h3>Garden Guru —— Plants Shop</h3>
      </div>        
      <div className="products"> 
        {products.map((product) => {
          return (
              <Product product={product} />
          )
        })}
      </div>
    </div>
  );
};
