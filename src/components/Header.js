import React, { useState } from "react";
import Logo from "./../../assets/deveats.png";
import { Link } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img src={Logo} alt="Logo" className="logo" />
  </a>
);

const Header = () => {
  const [Logged, setLogged] = useState(false);
  const LoggedUser = () => setLogged(!Logged);
  return (
    <header className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <Link to="/about">About</Link>
          <li>Contact</li>
          <li>Cart</li>
          {Logged ? (
            <button onClick={LoggedUser}>Logout</button>
          ) : (
            <button onClick={LoggedUser}>Login</button>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
