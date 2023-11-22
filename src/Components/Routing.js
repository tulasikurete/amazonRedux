import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductView from "./ProductView";

import CartPage from "./Cart";
import Header from "./Header";
export default function Routing() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ marginTop: 30 }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/products/:id" element={<ProductView />}>
            {" "}
          </Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}
