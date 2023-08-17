import "../index.css";
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};



export default AppLayout;
