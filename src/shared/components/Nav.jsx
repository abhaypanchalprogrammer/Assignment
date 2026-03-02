import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";
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
      <div className="max-w-6xl text-gray-500 mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-sm"></div>
          <h1 className="text-lg font-semibold tracking-tight">MyStore</h1>
        </div>

        <div className="flex items-center gap-5 md:gap-8">
          <Link to="/home" className="hover:underline active:text-black">
            Home
          </Link>
          <Link to="/product" className="hover:underline active:text-black">
            About
          </Link>

          <div onClick={goToCart} className=" text-2xl cursor-pointer">
            <FaShoppingCart className="relative top-3 active:text-black" />
            <span className="relative -top-5.5 -right-3 bg-black text-white text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
              {cart.length}
            </span>
          </div>

          {user && (
            <div
              onClick={handleUser}
              className="text-2xl cursor-pointer active:text-black"
            >
              <FaUser />
            </div>
          )}

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
