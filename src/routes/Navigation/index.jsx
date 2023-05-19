import { Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
// import "./Navigation.scss";
import { AuthContext } from "../../contexts/Auth";
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

const Navigation = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
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
                <NavigationLink as="span" onClick={logout}>
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
