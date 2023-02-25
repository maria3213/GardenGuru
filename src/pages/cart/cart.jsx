import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
// import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Grow, Grid,Button } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import "./cart.css";
export const Cart = () => {
  const { products,cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
    {totalAmount > 0 ? (
      <Container sx={{marginTop:"100px",marginLeft:"200px"}} maxWidth="lg"> 
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                  
              <Grid item xs={12} sm={8}> 
                <div className="cart">
                  {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                      return <CartItem data={product} />;
                    }
                  })}
                </div>
              </Grid>
              <Grid item xs={12} sm={1}>
              </Grid>

              <Grid item xs={12} sm={3}>
                <div className="checkout" style={{position: "fixed"}}>
                  <p> Subtotal: ${totalAmount} </p>
                  <button onClick={() => navigate("/")}> Continue Shopping </button><br />
                  <button
                    onClick={() => {
                      checkout();
                      navigate("/checkout");
                    }}
                  >
                    {" "}
                    Checkout{" "}
                  </button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    ) : (
      <div style={{margin:"100px"}}>
        <h1> Your Shopping Cart is Empty</h1>
        <Button variant="outlined" onClick={()=> navigate("/")} endIcon={<LocalMallIcon />}>
          Go back to shopping 
        </Button>
        {/* <button onClick={()=> navigate("/")}> Go back to shopping </button> */}
      </div>
    )}
    </>

    );
  };



    // <div className="cart">
    //   <div>
    //     <h1>Your Cart Items</h1>
    //   </div>
    //   <div className="cart">
    //     {products.map((product) => {
    //       if (cartItems[product.id] !== 0) {
    //         return <CartItem data={product} />;
    //       }
    //     })}
    //   </div>

    //   {totalAmount > 0 ? (
    //     <div className="checkout">
    //       <p> Subtotal: ${totalAmount} </p>
    //       <button onClick={() => navigate("/")}> Continue Shopping </button>
    //       <button
    //         onClick={() => {
    //           checkout();
    //           navigate("/checkout");
    //         }}
    //       >
    //         {" "}
    //         Checkout{" "}
    //       </button>
    //     </div>
    //   ) : (
    //     <>
    //       <h1> Your Shopping Cart is Empty</h1>
    //       <button onClick={()=> navigate("/")}> Go back to shopping </button>
    //     </>
    //   )}
    // </div> 

