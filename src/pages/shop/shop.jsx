import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Product } from "./product"; //component
import "./shop.css";


export const Shop = () => {    //get products from App.js as props and immediately destructure it 
  
  const { products } = useContext(ShopContext);
  
  return (
    <div className="shop">
      <div className="shopTitle">
        <h3>PedroTech Shop</h3>
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
