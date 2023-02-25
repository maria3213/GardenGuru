import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Details } from "./pages/shop/details/details";

// import { useState,useEffect } from "react";

function App() {
  //create a state to store the products info
  // const [products,setProducts] = useState([]);//default is an empty array
  
  

  //fetch products immediately when page loads
  // useEffect(()=>{
  //   fetchProducts();
  // },[]);//empty array means only run at the start on the render
  //in class based components, this is called component mounts


  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<Details />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
