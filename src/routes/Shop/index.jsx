import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../containers/CategoriesPreview";
import Category from "../../containers/Category";
import { useEffect } from "react";
import { setProductsByCategories } from "../../store/Categories/reducer";
import { useDispatch } from "react-redux";
import httpService from "../../services/Http";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductsByCategories = async () => {
      const response = await httpService.get("category/products");
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
