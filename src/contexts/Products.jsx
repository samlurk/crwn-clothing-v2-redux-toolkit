import { createContext, useEffect, useState } from "react";
import httpService from "../services/Http/HttpService";

export const ProductContext = createContext({
  products: [],
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await httpService.get("product");
      setProducts(response);
    };
    fetchProducts();
  }, []);

  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
