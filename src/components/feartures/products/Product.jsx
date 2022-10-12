import React from "react";

export default function Product({ product }) {
  const { title, price, description, category, image, size } = product;
  return (
    <div className="product__item">
      <img
        src={
          image[0] === null ? "https://via.placeholder.com/150x250" : image[0]
        }
        alt={title}
        className="product__thumbnail"
      />
      <div className="product__content">
        <div className="product__title">{title}</div>
        <div className="product__info">
          <div className="product__price">{price}</div>
          <div className="product__size">{size.map((x) => x)}</div>
        </div>
      </div>
    </div>
  );
}
