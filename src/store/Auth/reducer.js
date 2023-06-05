import { setIsAuthenticated } from "./action";
import { AUTH_ACTION_TYPES } from "./types";

const INITIAL_STATE = {
  isAuthenticated: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTION_TYPES.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: payload,
      };
    default:
      return state;
  }
};

export function login(token) {
  localStorage.setItem("access_token", token);
  return setIsAuthenticated(true);
}

export function logout() {
  localStorage.removeItem("access_token");
  return setIsAuthenticated(false);
}
