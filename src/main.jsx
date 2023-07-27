import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import "./styles/index.css";
import { UserProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
  
);
