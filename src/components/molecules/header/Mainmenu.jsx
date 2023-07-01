import Logo from "./Logo";
import { deleteUserToken, token } from "../../../helpers/auth";
import { Link, useNavigate } from "react-router-dom";

const Mainmenu = () => {
  const navigate = useNavigate();

  const handleSessionStatus = () => {
    deleteUserToken();
    navigate("/");
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800 p-4">
        <Logo />
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="menu-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="menu-item">
              Products
            </Link>
          </li>
          <li>
            <Link to="#" className="menu-item">
              Offers
            </Link>
          </li>
          <li>
            <Link to="#" className="menu-item">
              About Us
            </Link>
          </li>
          {!token() ? (
            <li>
              <Link className="menu-item" to="/login">
                Log In
              </Link>
            </li>
          ) : (
            <li>
              <a className="menu-item" onClick={handleSessionStatus}>
                Log Out
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Mainmenu;
