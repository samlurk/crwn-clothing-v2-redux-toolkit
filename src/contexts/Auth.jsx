import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => false,
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(token) {
    localStorage.setItem("access_token", token);
    setIsAuthenticated(true);
  }

  function logout() {
    localStorage.removeItem("access_token");
    setIsAuthenticated(false);
  }

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        const payload = jwtDecode(token);
        const expirationDate = new Date(payload.exp * 1000);
        console.log(`Expiration: ${expirationDate}`);
        if (expirationDate < new Date()) {
          logout();
        } else {
          setIsAuthenticated(true);
        }
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
