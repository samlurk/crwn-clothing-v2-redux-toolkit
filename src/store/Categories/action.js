import { createAction } from "../../utils/Reducer";
import { CATEGORIES_ACTION_TYPES } from "./types";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const setProductsByCategories = (productsByCategories) =>
  createAction(
    CATEGORIES_ACTION_TYPES.SET_PRODUCTS_BY_CATEGORIES,
    productsByCategories
  );
