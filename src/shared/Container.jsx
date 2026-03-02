import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useProduct } from "./context/ProductContext.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";

const Container = () => {
  const { loading: loader } = useProduct();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const storedSession = localStorage.getItem("session");
    if (!storedSession) {
      navigate("/login");
      return;
    }

    const session = JSON.parse(storedSession);
    if (Date.now() > session.expiresAt) {
      localStorage.removeItem(session);
      navigate("/login");
      return;
    }
    setUser(session.user);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("session");
    navigate("/login");
  };

  if (loader) return <Loader />;
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <Nav handleLogout={handleLogout} user={user} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Container;
