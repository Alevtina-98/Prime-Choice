import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
const shoppingBag = "/assets/icons-shopping-bag-96.png";

const Header = () => {
  const navigate = useNavigate();

  const clickShopping = () => {
    navigate("/shopping-bag");
  };
  return (
    <div className="header">
      <h1 className="logo">
        <NavLink to="/">Prime Choice</NavLink>
      </h1>
      <div className="shopping-bag">
        <img src={shoppingBag} alt="shopping Bag" onClick={clickShopping} />
      </div>
    </div>
  );
};

export default Header;
