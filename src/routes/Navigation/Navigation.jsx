import { Outlet, Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.scss";

const Navigation = () => {
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
            <div className="nav__item">
              <Link className="nav__link" to="/sign-in">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
