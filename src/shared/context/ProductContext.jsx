import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <ProductContext.Provider value={{ product, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProduct = () => {
  return useContext(ProductContext);
};
