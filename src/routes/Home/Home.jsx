import { useContext, useEffect, useState } from "react";
import CategoryList from "../../components/Category/CategoryList/CategoryList";
import { CategoryContext } from "../../contexts/Category";

function Home() {
  const { categories } = useContext(CategoryContext);
  return (
    <main>
      <CategoryList categories={categories} />
    </main>
  );
}

export default Home;
