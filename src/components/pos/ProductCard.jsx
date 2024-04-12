import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const ProductCard = () => (
  <Card
    hoverable
    cover={<img alt="example" src="https://static.vecteezy.com/system/resources/thumbnails/021/866/056/small/hamburger-on-black-background-realistic-3d-illustration-generative-ai-free-photo.jpg" />}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
    className="product__image"
  >
    <Meta
      title="set-menu-2"
      description={`price: $${"sale_price"}`}
    />
  </Card>
);

export default ProductCard;
