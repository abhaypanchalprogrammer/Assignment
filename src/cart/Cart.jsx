import React from "react";
import { useCart } from "../shared/context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { totalAmount, clearCart, updateQuantity, removeCart, cart } =
    useCart();

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <button
            onClick={() => navigate("/home")}
            className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
            Shopping Cart
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Review Your Items
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">₹ {item.price}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 border border-gray-300 rounded-full"
                      >
                        -
                      </button>

                      <span className="text-sm">{item.quantity}</span>

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 border border-gray-300 rounded-full"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeCart(item.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 h-fit">
            <h2 className="text-lg font-semibold mb-6">Order Summary</h2>

            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <span>Subtotal</span>
              <span>₹ {totalAmount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-6">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-base font-semibold mb-8">
              <span>Total</span>
              <span>₹ {totalAmount.toFixed(2)}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-full hover:opacity-80 transition">
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-4 text-sm text-gray-500 hover:underline"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
