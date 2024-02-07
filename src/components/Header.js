import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import Logo from "./../../assets/swiggy-1.svg";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { IoSearch } from "react-icons/io5";
import { TbDiscount } from "react-icons/tb";
import { GrContactInfo } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart } from "react-icons/bs";
import UserContext from "../utils/UserContext";
const Title = () => (
  <Link to="/">
    <img src={Logo} alt="Logo" className="w-8 object-cover" />
  </Link>
);

const Header = () => {
  const [Logged, setLogged] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const LoggedUser = () => setLogged(!Logged);

  const state = useSelector((state) => state.cart.items);

  console.log(state);

  const { name, email } = useContext(UserContext);
  // console.log({ name, email });
  return (
    <>
      <header className="flex z-40 shadow-xl py-5 sticky top-0 bg-slate-100 px-24 justify-between items-center">
        <Title />
        <div className="nav-items hidden md:block">
          <ul>
            <li className="flex items-center gap-3">
              <IoSearch size={20} />
              <Link to="/search">Search</Link>
            </li>
            <li className="flex items-center gap-3">
              <TbDiscount size={20} />
              <Link to="/about">Offers</Link>
            </li>
            <li className="flex items-center gap-3">
              <GrContactInfo size={20} />
              <Link to="/contact">Help</Link>
            </li>
            <li className="flex items-center gap-3">
              <BsCart size={20} />
              <Link to="/cart"> Cart - {state?.length} Items</Link>
            </li>
            {Logged ? (
              <button onClick={LoggedUser}>Logout</button>
            ) : (
              <button onClick={LoggedUser}>Login</button>
            )}
          </ul>
        </div>
        <div
          onClick={() => setMobileView(!mobileView)}
          className="md:hidden duration-200">
          <GiHamburgerMenu
            size={40}
            className={`cursor-pointer absolute duration-200 top-6`}
          />
        </div>
      </header>

      <div className="relative z-50 md:hidden">
        <aside
          className={`fixed left-0 bottom-0-0 flex-shrink-0 w-64 ${
            mobileView ? "flex " : "fixed -ml-64"
          } flex-col transition-all duration-500`}>
          <div className="bg-gray-900"></div>
          <nav className="h-screen flex flex-col bg-white shadow-xl py-5 px-8 gap-5">
            <Link onClick={() => setMobileView(!mobileView)} to="/">
              Search
            </Link>
            <Link onClick={() => setMobileView(!mobileView)} to="/about">
              Offers
            </Link>
            <Link onClick={() => setMobileView(!mobileView)} to="/contact">
              Help
            </Link>
            <div></div>
            <Link onClick={() => setMobileView(!mobileView)} to="/cart">
              Cart
            </Link>
            {Logged ? (
              <div onClick={LoggedUser}>Logout</div>
            ) : (
              <div onClick={LoggedUser}>Login</div>
            )}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Header;
