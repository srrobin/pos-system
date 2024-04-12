/* eslint-disable max-len */
import React from "react";
import { Col, Flex, Row, Tabs } from "antd";
import SearchBox from "./SearchBox";
import DraftButton from "./DraftButton";
import FullScreenBtn from "./FullScreenBtn";
import CategoryBox from "./CategoryBox";
import PosCustomer from "./PosCustomer";
import PosCalculationBlock from "./PosCalculationBlock";
import ThemeBtn from "./ThemeBtn";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";
import DrawerBtn from "./DrawerBtn";

const Pos = () => {
  return (
    <main>
      <div className="pos">
        <div className="pos__products">
          <div className="pos__top">
            <Row gutter={[24, 0]} style={{ paddingTop: "10px" }}>
              <Col span={2}><DrawerBtn /></Col>
              <Col span={8}><SearchBox /></Col>
              <Col span={8}><CategoryBox /></Col>
              <Col span={2}><DraftButton /></Col>
              <Col span={2}><FullScreenBtn /></Col>
              <Col span={2}><ThemeBtn /></Col>
            </Row>
          </div>
          <div className="pos__menu">
            <Row gutter={[24, 0]}>
              <Col span={24}>
                <Tabs
                  defaultActiveKey="1"
                  tabPosition="top"
                  style={{
                    height: 50,
                  }}
                  items={new Array(30).fill(null).map((_, i) => {
                    const id = String(i);
                    return {
                      label: `Tab-${id}`,
                      key: id,
                      disabled: i === 28,
                      // children: `Content of tab ${id}`,
                    };
                  })}
                />
              </Col>
            </Row>

          </div>
          <div className="show__product">
            <Row gutter={[24, 24]}>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
              <Col span={12} md={8} lg={6} xxl={4}>
                <ProductCard />
              </Col>
            </Row>
          </div>
        </div>
        <div className="pos__cart">

          <div className="cart__top">
            <PosCustomer />
          </div>

          <div className="cart__items">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <CartItem />
              </Col>
              <Col span={24}>
                <CartItem />
              </Col>
              <Col span={24}>
                <CartItem />
              </Col>
            </Row>
          </div>
          <div className="cart__calculation">
            <PosCalculationBlock />
          </div>
        </div>

      </div>
    </main>
  );
};

export default Pos;
