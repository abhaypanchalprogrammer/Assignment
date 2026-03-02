import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "./context/ProductContext.jsx";
import Nav from "./components/Nav.jsx";
import MainSection from "../home/MainSection.jsx";
import ProductSection from "../home/ProductSection.jsx";
import Footer from "./components/Footer.jsx";

const Home = () => {
  const { product, loading } = useProduct();
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
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <Nav handleLogout={handleLogout} user={user} />
        <MainSection />
        <ProductSection product={product} loading={loading} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
