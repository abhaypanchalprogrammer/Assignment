import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login.jsx";
import Register from "../Auth/Register.jsx";
import Home from "./Home.jsx";
import Profile from "../profile/Profile.jsx";
import Cart from "../cart/Cart.jsx";

const Wrapper = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Wrapper;
