import "./App.css";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Home from "./components/Home";
import HotDeals from "./components/HotDeals";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Featured />
      <Categories />
      <Products />
      <Offers />
      <HotDeals/>
   
    </>
  );
}

export default App;
