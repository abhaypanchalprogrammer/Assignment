import React from "react";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
