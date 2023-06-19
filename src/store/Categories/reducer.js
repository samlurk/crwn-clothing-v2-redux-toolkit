import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  categories: [],
  productsByCategories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setProductsByCategories(state, action) {
      state.productsByCategories = action.payload;
    },
  },
});

export const { setCategories, setProductsByCategories } = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
