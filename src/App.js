import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Details } from "./pages/shop/details/details";

// import { useState,useEffect } from "react";

const App = () => {

  return (
    <div className="App">
      <ShopContextProvider> 
        <Router>
          <Navbar /> {/*inside of <Router>while outside of<Routes>:Navbar in every route*/}
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
