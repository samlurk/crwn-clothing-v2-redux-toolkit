import { Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";

import { useContext } from "react";
import CartIcon from "../../components/Cart/CartIcon";
import CartDropdown from "../../components/Cart/CartDropdown";
import { CartContext } from "../../contexts/Cart";
import {
  NavigationContainer,
  NavigationList,
  NavigationItem,
  NavigationLink,
  Header,
  LogoContainer,
} from "./index.styles";
import { logout } from "../../store/Auth/reducer";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/Auth/selector";

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <Header>
        <NavigationLink to="/">
          <LogoContainer src={`${CrwnLogo}`} />
        </NavigationLink>
        <NavigationContainer>
          <NavigationList>
            <NavigationItem>
              <NavigationLink to="/shop">Shop</NavigationLink>
            </NavigationItem>
            {isAuthenticated ? (
              <NavigationItem>
                <NavigationLink as="span" onClick={() => dispatch(logout())}>
                  Sign Out
                </NavigationLink>
              </NavigationItem>
            ) : (
              <NavigationItem>
                <NavigationLink to="/auth">Sign In</NavigationLink>
              </NavigationItem>
            )}
            <NavigationItem>
              <CartIcon />
            </NavigationItem>
            {isCartOpen && <CartDropdown />}
          </NavigationList>
        </NavigationContainer>
      </Header>

      <Outlet />
    </>
  );
};

export default Navigation;
