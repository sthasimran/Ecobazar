import { Outlet } from "react-router-dom";
import "./App.css";
import FooterBar from "./components/Home/FooterBar";
import Navbar from "./components/Home/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <FooterBar/>
      
    </>
  );
}

export default App;
