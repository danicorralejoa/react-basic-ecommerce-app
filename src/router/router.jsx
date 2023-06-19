import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404.jsx";
import App from "../components/templates/App.jsx";
import Products from "../components/pages/Products.jsx";
import Homepage from "../components/pages/Homepage.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error404 />,
      children: [
        {
            index: true,
            element: <Homepage />
        },
        {
            path: "/products",
            element: <Products />
        }
      ]
    },
  ]);

  export default router