import { createAction } from "../../utils/reducer";
import { AUTH_ACTION_TYPES } from "./types";

export const setIsAuthenticated = (auth) =>
  createAction(AUTH_ACTION_TYPES.SET_IS_AUTHENTICATED, auth);
