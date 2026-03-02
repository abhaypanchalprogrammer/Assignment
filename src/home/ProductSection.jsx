import React from "react";
import { useCart } from "../shared/context/CartContext.jsx";
import { useProduct } from "../shared/context/ProductContext.jsx";

const ProductSection = () => {
  const { addToCart } = useCart();
  const { product, loading } = useProduct();
  return (
    <section className="relative py-28">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
              Store
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Our Collection
            </h2>
          </div>

          <p className="max-w-md text-gray-500 text-sm leading-relaxed">
            A refined selection of everyday essentials crafted with attention to
            detail.
          </p>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {product.map((item) => (
              <div key={item.id} className="group relative">
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition duration-300 group-hover:shadow-xl">
                  <div className="relative h-72 bg-gray-100 flex items-center justify-center p-8">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <h4 className="text-lg font-medium leading-snug">
                      {item.title}
                    </h4>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold">
                        ${item.price}
                      </span>

                      <button
                        onClick={() => addToCart(item)}
                        className="text-sm px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
