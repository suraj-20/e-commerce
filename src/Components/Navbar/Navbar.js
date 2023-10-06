import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./NavMenu";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <section className="navbar">
      <h1 className="nav-logo">Zomato</h1>

      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu flex"}>
        <h1 className="nav-mobile-logo">Zomato</h1>
        {MenuItems.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default Navbar;
