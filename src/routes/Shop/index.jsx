import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../containers/CategoriesPreview";
import Category from "../../containers/Category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};
export default Shop;
