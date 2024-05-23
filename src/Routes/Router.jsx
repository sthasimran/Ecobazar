import { createBrowserRouter } from "react-router-dom";
import Pages from "../../Pages";
import App from "../App";
import Home from "../Home";
import Cart from "../Pages/Cart/Cart";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Shop from "../Shops/Shop";

const Move = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/signin",
        element: <SignIn/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);

export { Move };
