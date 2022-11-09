import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import HeaderModal from "../modal/headerModal/HeaderModal";
import "./header.scss";

export default function Header() {
  const headerRef = useRef(null);
  useEffect(() => {
    const listBtn = headerRef.current.querySelectorAll(
      ".header__nav__icon__item"
    );
    Array.from(listBtn).map((btn) =>
      btn.addEventListener("click", () => {
        btn.querySelector(".header__modal")?.classList.add("active");
      })
    );
    const handleActiveHeader = () => {
      if (headerRef.current !== null) {
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
          ? headerRef.current.classList.add("active")
          : headerRef.current.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleActiveHeader);
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header__mid">
            <div className="header__search">
              <div className="header__search__input">
                <input
                  type="text"
                  placeholder="Please enter product name ..."
                />
              </div>
              <div className="header__search__icon">
                <AiOutlineSearch />
              </div>
            </div>
            <div className="header__nav">
              <ul className="header__nav__list">
                <li>
                  <Link to={"/"} className="btn header__nav__links">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/product"} className="btn header__nav__links">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to={"/"} className="btn header__nav__links">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__nav__icon">
            <div className="header__nav__icon__item">
              <AiOutlineUser />
            </div>
            <div className="header__nav__icon__item">
              <AiOutlineSearch />
              <HeaderModal title="search"></HeaderModal>
            </div>
            <div className="header__nav__icon__item">
              <AiOutlineShopping />
              <div className="count">
                <span>0</span>
              </div>
              <HeaderModal title="cart"></HeaderModal>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
