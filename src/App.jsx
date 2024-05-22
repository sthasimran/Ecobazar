import { Outlet } from "react-router-dom";
import "./App.css";
import FooterBar from "./components/Footer/FooterBar";
import Navbar from "./components/Navbar/Navbar";

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
