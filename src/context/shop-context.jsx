import { createContext,  useState,useEffect } from "react";
// import { PRODUCTS } from "../products";
import { commerce } from '../lib/commerce';

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {

  const [products,setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  //fetch products from commerce api and set it to state
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(()=>{
    fetchProducts();
  },[]);//empty array means only run at the start on the render
  //for class based components, this is called component mounts
  //if not use useEffect, whenever the state change, the components will re-render

  //for cart's items:-----------------------------------------
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      cart[product.id] = 0;//key:id,value:商品数量
    }
    return cart;
  }; //{id1: 0, id2: 0...}
  //create a default cart obj that have all products with quantity of 0

  // const cartCount = getDefaultCart();
    //fetch products immediately when page loads
  
  useEffect(() => { 
    setCartItems(getDefaultCart());
  },[products] );//
  //不能使用[],要加上products,是因为最开始在mount时,products获取数据发生了update,然后由products更新引发这个callback
  //,如果为空的话,说明最开始在mount时,products获取数据的同时(!)创建cartCount,此时还没有products,所以创建cartCount失败
  //另外使用[cartCount]产生infinite loop


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

  const checkout = () => {    //clear cart
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
