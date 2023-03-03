import { createContext,  useState,useEffect } from "react";
// import { PRODUCTS } from "../products";
import { commerce } from '../lib/commerce';

export const ShopContext = createContext(null);
//create a store that have state and methods that are accessed for every components in the app


export const ShopContextProvider = (props) => {

  //for products:-----------------------------------------
  const [products,setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  //fetch products from commerce api to state
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }
  
  useEffect(()=>{
    fetchProducts();
  },[]);//empty array means only run at the start on the render
  //in class based components, this is called component mounts

  //for cart's items:-----------------------------------------
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      cart[product.id] = 0;//key:id,value:商品数量
    }
    return cart;
  }; //{[id1]: 0, [id2]: 0...}
  //create a default cart obj that have all products with quantity of 0

  const cartCount = getDefaultCart();
    //fetch products immediately when page loads
  
  useEffect(() => { setCartItems(cartCount)}, [products] );//要加这个useEffect,否则无法set state,
  //而且要加[products],否则产生infinite loop
  // console.log(products)
  //-----------------------------------------------------------
  const getTotalCartAmount = () => { //get sum price in cart
    let totalAmount = 0;
    for (const item in cartItems) { //loop through key: id
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === item);
        // console.log(itemInfo);
        totalAmount += cartItems[item]* itemInfo.price.raw;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const decrementFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {    //cart归零
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    products,
    setProducts,
    cartItems,
    addToCart,
    updateCartItemCount,
    decrementFromCart,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
