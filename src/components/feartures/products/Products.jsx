import React, { useState } from "react";
import { useEffect } from "react";
import "../products/products.scss";
import productApi from "../../../api/productApi";
import Product from "../productItem/Product.jsx";

export default function Products() {
  const [dataProduct, setDataProduct] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const handleCategoryNodeClick = () => {
    const listCategoryNode = document.querySelectorAll(
      ".product__category__item"
    );
    Array.from(listCategoryNode).map((item) =>
      item.addEventListener("click", (e) => {
        Array.from(listCategoryNode).forEach((x) =>
          x.classList.remove("active")
        );
        e.target.classList.toggle("active");
      })
    );
  };
  handleCategoryNodeClick();
  const productByCate = (cate) => {
    const newData = dataProduct.filter((item) => item.category === cate);
    setProductList(newData);
  };
  useEffect(() => {
    (async () => {
      const response = await productApi.getAllCate();
      setCategoryList(response);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const productData = await productApi.getAll();
      setDataProduct(productData);
    })();
  }, []);
  return (
    <div className="product">
      <div className="container">
        <div className="product__category">
          <div
            className="btn product__category__item active"
            onClick={() => setProductList(dataProduct)}
          >
            all
          </div>
          {categoryList.map((item, idx) => (
            <div
              className="btn product__category__item"
              onClick={() => productByCate(item)}
              key={idx}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="product__list">
          {productList.length > 0
            ? productList.map((product) => (
                <Product product={product} key={product.id} />
              ))
            : dataProduct.map((product) => (
                <Product product={product} key={product.id} />
              ))}
        </div>
      </div>
    </div>
  );
}
