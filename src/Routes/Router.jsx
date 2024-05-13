import { createBrowserRouter } from "react-router-dom";
import Pages from "../../Pages";
import Shop from "../../Shop";
import App from "../App";
import Home from "../Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

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
    ],
  },
]);

export { Move };
