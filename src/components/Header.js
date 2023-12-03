import React, { useState } from "react";
import Logo from "./../../assets/swiggy-1.svg";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { IoSearch } from "react-icons/io5";
import { TbDiscount } from "react-icons/tb";
import { GrContactInfo } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Title = () => (
  <Link to="/">
    <img src={Logo} alt="Logo" className="w-8 object-cover" />
  </Link>
);

const Header = () => {
  const [Logged, setLogged] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const LoggedUser = () => setLogged(!Logged);

  console.log(mobileView);
  return (
    <>
      <header className="flex shadow-xl py-5 sticky z-10 top-0 bg-slate-100 px-24 justify-between items-center">
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
              <FaRegUser size={20} color />
              Cart
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

      <div className="relative z-50">
        <aside
          class={`fixed left-0 bottom-0-0 flex-shrink-0 w-64 ${
            mobileView ? "flex " : "fixed -ml-64"
          } flex-col transition-all duration-500`}>
          <div class="bg-gray-900"></div>
          <nav class="h-screen flex flex-col bg-white shadow-xl py-5 px-8 gap-5">
            <Link onClick={() => setMobileView(!mobileView)} to="/">
              Search
            </Link>
            <Link onClick={() => setMobileView(!mobileView)} to="/about">
              Offers
            </Link>
            <Link onClick={() => setMobileView(!mobileView)} to="/contact">
              Help
            </Link>
            <div>Cart</div>
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
