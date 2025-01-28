import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p className="all-rights"> All rights reserved. Prime Choice 2025 ©</p>

      <ul>
        <li>
          Pnone:
          <NavLink to="tel:+48507456345"> +48 667 666 666</NavLink>
        </li>
        <li>
          Email:
          <NavLink to="mailto:PrimeChoice@gmail.com">
            PrimeChoice@gmail.com
          </NavLink>
        </li>
        <li>Address: 123 Main Street, Warsaw, Poland</li>
      </ul>
    </div>
  );
};

export default Footer;
