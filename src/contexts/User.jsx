import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { AuthContext } from "./Auth";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const handleUser = () => {
      if (isAuthenticated) {
        setCurrentUser(jwtDecode(localStorage.getItem("access_token")));
      } else {
        setCurrentUser(null);
      }
    };
    handleUser();
  }, [isAuthenticated]);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
