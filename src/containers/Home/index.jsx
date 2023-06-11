import { useEffect } from "react";
import CategoryList from "../../components/Category/CategoryList";
import httpService from "../../services/Http";
import { setCategories } from "../../store/Categories/action";
import { selectCategories } from "../../store/Categories/selector";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);
  useEffect(() => {
    const fetchCategories = async () => {
      let response = await httpService.get("category");
      dispatch(setCategories(response));
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
