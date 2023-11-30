import Logo from "./Logo";
import { deleteUserToken, token } from "../../../helpers/auth";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { CartContext } from "../../../context/CartContext";

const MainMenu = () => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const { state } = useContext(CartContext);
  const cartItemCount = state.cart.length;

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
          <li>
            <Link to="/cart" className="menu-item">
              Cart
              {/* Display the number of items in the cart here */}
              <span className="cart-item-count">
                {cartItemCount > 0 ? cartItemCount : null}
              </span>
            </Link>
          </li>
          {!token() ? (
            <li>
              <Link className="menu-item" to="/login">
                Log In
              </Link>
            </li>
          ) : (
            <>
              {userData?.role == "admin" && (
                <li>
                  <Link className="menu-item" to="/admin">
                    Admin
                  </Link>
                </li>
              )}
              <li>
                <Link className="menu-item" to ="/profile">
                  My Profile
                </Link>
              </li>
              <li>
                <a className="menu-item" onClick={handleSessionStatus}>
                  Log Out
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
