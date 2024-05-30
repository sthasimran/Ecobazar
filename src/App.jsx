import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import FooterBar from "./components/Footer/FooterBar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log("cart", cart);
  console.log("totalQuantity", totalQuantity);
  console.log("totalPrice", totalPrice);

  return (
    <>
      <Navbar />
      <Outlet />
      <FooterBar />
    </>
  );
}

export default App;
