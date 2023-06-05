import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../containers/CategoriesPreview";
import Category from "../../containers/Category";
import { useEffect } from "react";
import {
  setCategories,
  setProductsByCategories,
} from "../../store/Categories/action";
import { useDispatch } from "react-redux";
import httpService from "../../services/Http";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCategories = async () => {
      let response = await httpService.get("category");
      dispatch(setCategories(response));
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsByCategories = async () => {
      let response = await httpService.get("category/products");
      dispatch(setProductsByCategories(response));
    };
    fetchProductsByCategories();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};
export default Shop;
