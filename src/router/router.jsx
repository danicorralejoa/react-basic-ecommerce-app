import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404.jsx";
import App from "../components/templates/App.jsx";
import Products from "../components/pages/Products.jsx";
import Homepage from "../components/pages/Homepage.jsx";
import Login from "../components/pages/Login.jsx";
import Registration from "../components/pages/Registration.jsx";
import ProductDetailPage from "../components/pages/ProductDetailPage.jsx";
import { ProductUpdatenForm } from "../components/pages/admin/ProductUpdateForm.jsx";
import ProductAdministratorForm from "../components/pages/admin/ProductAdministratorForm.jsx";
import Admin from "../components/templates/Admin.jsx";
import Cart from "../components/pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/products/create",
        element: <ProductUpdatenForm />,
      },
      {
        path: "/admin/products",
        element: <ProductAdministratorForm />,
      },
      {
        path: "/admin/products/update/:id",
        element: <ProductUpdatenForm />,
      },
    ],
  },
]);

export default router;
