import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
          <Link to="/">home</Link></li>
          <li>
            <Link to="/about">about us</Link>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
