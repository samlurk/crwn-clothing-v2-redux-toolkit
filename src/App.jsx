import { useEffect, useState } from "react";
import CategoryList from "./components/category-list/category-list.component";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let response = await fetch("./categories.json");
      setCategories(await response.json());
    };
    fetchCategories();
  }, []);
  return (
    <>
      <CategoryList categories={categories} />
    </>
  );
}

export default App;
