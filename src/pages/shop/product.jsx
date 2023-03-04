import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';

import { Link } from "react-router-dom";

export const Product = ({product}) => { //注意这里要解构product!!!

  // console.log(product);//to make sure which property names of product we want to use

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[product.id];


  return (
      <Card sx={{maxWidth: '80%',':hover': {boxShadow: 10},}}>
        <Link to={`/products/${product.id}`}> {/*click card to jump to product detail page */}
          <CardMedia sx={{ height: 0,paddingTop: '100%'}} image={product.image.url} title={product.name} />
        </Link>
        <CardContent>
          <div style={{display: 'flex',justifyContent: 'space-between'}}>
            <Typography gutterBottom variant="h6" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {product.price.formatted_with_symbol}
            </Typography>
          </div> 
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
        </CardContent>
        <CardActions sx={{display: 'flex',justifyContent: 'flex-end'}}>
          <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </CardActions>
      </Card>
    
  );
};
