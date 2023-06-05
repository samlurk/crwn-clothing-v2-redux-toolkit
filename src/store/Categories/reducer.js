import { CATEGORIES_ACTION_TYPES } from "./types";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  productsByCategories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    case CATEGORIES_ACTION_TYPES.SET_PRODUCTS_BY_CATEGORIES:
      return { ...state, productsByCategories: payload };
    default:
      return state;
  }
};
