import React from "react";
import { CloseCircleOutlined, ShoppingOutlined } from "@ant-design/icons";

const CartItem = () => (
  <div className="cart__item">
    <div className="delete__icon">
      <CloseCircleOutlined />
    </div>
    <div className="counter__area">
      <button className="plus" type="button">
        +
      </button>
      <span> 2 </span>
      <button className="minus" type="button">
        -
      </button>
    </div>
    <div className="cart__info">
      <div className="cart__title">set-item-2</div>
      <div className="cart__quantity"> 2 X 1 Item</div>
    </div>
    <div className=" main__price">
      $ 100
    </div>
  </div>
);

export default CartItem;
