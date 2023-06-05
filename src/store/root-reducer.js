import { combineReducers } from "redux";
import { userReducer } from "./User/reducer";
import { authReducer } from "./Auth/reducer";
import { categoriesReducer } from "./Categories/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  category: categoriesReducer,
});
