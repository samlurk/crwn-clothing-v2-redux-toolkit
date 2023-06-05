import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Navigation from "./routes/Navigation";
import Auth from "./containers/Auth";
import Shop from "./routes/Shop";
import Checkout from "./containers/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurrentUser } from "./store/User/action";
import jwtDecode from "jwt-decode";
import { setIsAuthenticated } from "./store/Auth/action";
import { logout } from "./store/Auth/reducer";
import { selectIsAuthenticated } from "./store/Auth/selector";

const App = () => {
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        const payload = jwtDecode(token);
        const expirationDate = new Date(payload.exp * 1000);
        if (expirationDate < new Date()) {
          dispatch(logout());
        } else {
          dispatch(setIsAuthenticated(true));
        }
      }
    };
    checkAuth();
  }, []);

  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    const handleUser = () => {
      if (isAuthenticated) {
        dispatch(
          setCurrentUser(jwtDecode(localStorage.getItem("access_token")))
        );
      }
    };
    handleUser();
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
