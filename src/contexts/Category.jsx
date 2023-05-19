import { createContext, useEffect, useState } from "react";
import httpService from "../services/Http";

export const CategoryContext = createContext({
  categories: [],
  productsByCategories: [],
});
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [productsByCategories, setProductsByCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let response = await httpService.get("category");
      setCategories(response);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsByCategories = async () => {
      let response = await httpService.get("category/products");
      setProductsByCategories(response);
    };
    fetchProductsByCategories();
  }, []);

  const value = { categories, productsByCategories };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
