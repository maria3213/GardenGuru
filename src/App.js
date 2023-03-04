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
      <ShopContextProvider> {/*包含了global state和method*/}
        <Router>
          <Navbar /> {/*在<Router>里但在<Routes>外:使Navbar在每个route里都有*/}
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
