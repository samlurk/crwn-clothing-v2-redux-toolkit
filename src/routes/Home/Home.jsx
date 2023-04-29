import { useEffect, useState } from "react";
import CategoryList from "../../components/Category/CategoryList/CategoryList";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let response = await fetch("./categories.json");
      setCategories(await response.json());
    };
    fetchCategories();
  }, []);
  return (
    <main>
      <CategoryList categories={categories} />
    </main>
  );
}

export default Home;
