import React from "react";

const Button = ({ loading }) => {
  return (
    <div>
      <button
        type="submit"
        className="bg-red-600 w-full text-white py-2 rounded-lg hover:bg-red-700 transition duration-200 font-medium"
      >
        {loading ? "Submitting..." : "Submit Form"}
      </button>
    </div>
  );
};

export default Button;
