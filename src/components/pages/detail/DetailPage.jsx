import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../../api/productApi";

export default function DetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const price = product.price * quantity;
  useEffect(() => {
    (async () => {
      const data = await productApi.getProduct(id);
      setProduct(data);
    })();
  }, [id]);
  return (
    <>
      <div className="detail-product">
        <div className="container">
          <div className="detail-product__wrap">
            <div className="detail-product__thumbnail">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="detail-product__info">
              <div className="detail-product__info__name">{product.title}</div>
              <div className="detail-product__info__price">
                {!Number(price) ? 0 : price}
              </div>
              <div className="detail-product__info__size">
                <span>M</span>
                <span>L</span>
                <span>XL</span>
              </div>
              <div className="detail-product__info__quantity">
                <span
                  onClick={() =>
                    setQuantity(
                      quantity > 0 ? Number.parseInt(quantity) - 1 : 0
                    )
                  }
                >
                  -
                </span>
                <span>{quantity}</span>
                <span
                  onClick={() =>
                    setQuantity(quantity <= 10 ? quantity + 1 : 10)
                  }
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
