import Logo from "./Logo";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800 p-4">
        <Logo />
        <ul className="flex space-x-4">
          <li>
            <Link to="/admin/products" className="menu-item">
              Products Administration
            </Link>
          </li>
          <li>
            <Link to="/" className="menu-item">
              Back to App
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminMenu;
