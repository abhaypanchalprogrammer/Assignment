import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login.jsx";
import Register from "../Auth/Register.jsx";
import Profile from "../profile/Profile.jsx";
import Cart from "../cart/Cart.jsx";
import ProductSection from "../home/ProductSection.jsx";
import Hero from "../home/Hero.jsx";
import Container from "./container.jsx";
const Wrapper = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route element={<Container />}>
          <Route path="/home" element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductSection />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Wrapper;
