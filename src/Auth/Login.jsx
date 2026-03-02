import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;
    if (!email || !password) {
      return setError("Please fill all fields");
    }
    setLoading(true);
    const getItem = localStorage.getItem("registeredUser");
    if (!getItem) {
      setLoading(false);
      return setError("User not found");
    }
    const obj = JSON.parse(getItem);

    if (obj.email !== formData.email || obj.password !== formData.password) {
      setLoading(false);
      return setError("Invalid Information");
    }
    const currentTime = Date.now();

    const session = {
      user: {
        name: obj.name,
        email: obj.email,
      },
      loggedInTime: currentTime,
      expiresAt: currentTime + 5 * 60 * 1000,
    };
    localStorage.setItem("session", JSON.stringify(session));
    navigate("/home");
    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-100 rounded-3xl p-10">
          <div className="mb-10 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Sign in to continue to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center mt-8">
            Don't have an account?{" "}
            <Link to="/" className="text-black font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
