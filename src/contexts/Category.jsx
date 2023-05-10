import { createContext, useEffect, useState } from "react";
import httpService from "../services/Http/HttpService";

export const CategoryContext = createContext({
  categories: [],
});
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let response = await httpService.get("category");
      setCategories(response);
    };
    fetchCategories();
  }, []);

  const value = { categories };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
