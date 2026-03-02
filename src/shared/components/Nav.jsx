import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const Nav = ({ handleLogout, user }) => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const handleUser = () => {
    navigate("/profile");
  };
  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-sm"></div>
          <h1 className="text-lg font-semibold tracking-tight">MyStore</h1>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-sm text-gray-500 flex items-center justify-center gap-8">
            <div onClick={goToCart} className="text-2xl cursor-pointer ">
              <FaShoppingCart className="relative top-2.5" />
              <span className="relative -top-5.5 -right-3 bg-black text-white text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                {cart.length}
              </span>
            </div>
            {user ? (
              <div className="text-2xl cursor-pointer" onClick={handleUser}>
                <FaUser />
              </div>
            ) : null}
          </div>

          <button
            onClick={handleLogout}
            className="text-sm border border-gray-300 px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
