import React from "react";
import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gray-50 -z-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-100 rounded-full blur-3xl opacity-40 -z-10"></div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                Limited Offer
              </p>

              <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
                Mid-Season <br /> Collection Sale
              </h1>

              <p className="text-gray-600 max-w-md leading-relaxed">
                Thoughtfully curated pieces now available at special pricing.
                Explore refined essentials designed for everyday wear.
              </p>

              <div className="flex items-center gap-6 pt-4">
                <button
                  onClick={() => {
                    navigate("/product");
                  }}
                  className="px-8 py-3 bg-black border text-white rounded-full hover:bg-white hover:text-black hover:border transition"
                >
                  Explore Collection
                </button>

                <span className="text-sm text-gray-500">
                  Up to 40% off selected items
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="h-[420px] bg-white rounded-3xl   flex items-center justify-center">
                <img
                  src={image}
                  alt="Mid-season collection"
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
