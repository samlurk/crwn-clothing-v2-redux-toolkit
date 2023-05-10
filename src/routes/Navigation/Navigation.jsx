import { Outlet, Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.scss";
import { AuthContext } from "../../contexts/Auth";
import { useContext } from "react";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/Cart";

const Navigation = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <header>
        <Link className="logo" to="/">
          <img src={`${CrwnLogo}`} className="logo__image" />
        </Link>
        <div className="nav">
          <div className="nav__list">
            <div className="nav__item">
              <Link className="nav__link" to="/shop">
                Shop
              </Link>
            </div>
            {isAuthenticated ? (
              <div className="nav__item">
                <span className="nav__link" onClick={logout}>
                  Sign Out
                </span>
              </div>
            ) : (
              <div className="nav__item">
                <Link className="nav__link" to="/auth">
                  Sign In
                </Link>
              </div>
            )}
            <div className="nav__item">
              <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
