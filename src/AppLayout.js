import "../index.css";
import Header from "./components/Header.js";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default AppLayout;
