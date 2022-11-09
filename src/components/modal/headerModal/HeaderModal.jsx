import React from "react";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import "../headerModal/headerModal.scss";
export default function HeaderModal(props) {
  const modalRef = useRef(null);
  const closeModal = () =>
    modalRef !== null ? modalRef.current.classList.remove("active") : "";
  return (
    <div className="header__modal" ref={modalRef}>
      <div className="header__modal__wrap">
        <div className="header__modal__top">
          <h2 className="header__modal__title">{props.title}</h2>
          <div className="header__modal__btn" onClick={closeModal}>
            <IoMdClose />
          </div>
        </div>
        <div className="header__modal__content">
          {props.title === "search" ? (
            <HeaderModalSearch />
          ) : (
            <HeaderModalCart />
          )}
        </div>
      </div>
    </div>
  );
}
export const HeaderModalSearch = (props) => {
  return (
    <div className="header__modal__input">
      <input type="text" placeholder="Product name ..." />
      <div className="header__modal__icon-search">
        <AiOutlineSearch />
      </div>
    </div>
  );
};
export const HeaderModalCart = (props) => {
  return (
    <>
      <div className="header__modal__list">
        <div className="header__modal__item">
          <div className="header__modal__item__title">
            {props.title || "No item"}
          </div>
        </div>
      </div>
      <div className="header__modal__sum">
        <p className="header__modal__sum__desc">Sum :</p>
        <p className="header__modal__sum__price">0</p>
      </div>
      <div className="header__modal__pay">payment</div>
    </>
  );
};
