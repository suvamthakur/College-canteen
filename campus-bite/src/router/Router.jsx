import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Signup from "../components/Signup";
import "../App.css";
import CartPage from "../pages/shop/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { 
        path: "/", 
        element: <Home /> 
      },
      {
        path: "/cart-page",
        element: <CartPage />
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
