import React from "react";
import { FcShop } from "react-icons/fc";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="/">
              <FcShop />
            </a>
          </div>
          <div className="header__nav">
            <ul className="header__nav-list">
              <li>
                <a href="/" className="header__nav-links">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="header__nav-links">
                  Product
                </a>
              </li>
              <li>
                <a href="/" className="header__nav-links">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="header__nav-links">
                  <AiOutlineShopping />
                </a>
              </li>
              <li>
                <a href="/" className="header__nav-links">
                  <AiOutlineSearch />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
