import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../productItem/product.scss";
export default function Product({ product }) {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <>
      <Link to={`/product/${id}`} className="product__item">
        <div className="product__item__wrap">
          <div className="product__item__img">
            <img
              src={
                image === null ? "https://via.placeholder.com/150x250" : image
              }
              alt={title}
            />
          </div>
          <div className="product__item__content">
            <h3 className="product__item__title">{title}</h3>
            <div className="product__item__info">
              <div className="product__item__price">
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(price)}
              </div>
              <div className="product__item__rate">
                <span>
                  {rating.rate}
                  <AiFillStar />
                </span>
                <span>sell {rating.count}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
