import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const ProductCard = ({ product }) => (
  <Card
    hoverable
    cover={
      <img
        alt="example"
        src={product.images[0].replace(/[\\[\]\\"\\]/g, "")}
        style={{ width: "100%", height: "100px", objectFit: "cover" }}
      />}
    variant="top"
    className="product__image"
  >
    <Meta
      title={product.title}
      description={`price: $${product.price}`}
    />
  </Card>
);

export default ProductCard;
