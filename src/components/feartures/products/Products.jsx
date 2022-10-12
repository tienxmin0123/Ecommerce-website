import React, { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import productApi from "../../../api/productApi";
import Product from "./Product";

export default function Products() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const productData = await productApi.getAll();
      setProduct(productData.items);
    })();
  }, []);
  return (
    <div className="product">
      <div className="product__list">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
}
