import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import {
  CheckCircleFilled,
  ContainerOutlined,
  DollarCircleFilled,
  PlusCircleOutlined,
  RedoOutlined,
} from "@ant-design/icons";

const PosCalculationBlock = () => {
  return (
    <div className="poscalculation">

      <div className="poscalculation__inputs">
        <Form layout="vertical">
          <Row gutter={[8, 0]}>
            <Col span={12} lg={6}>
              <Form.Item label="Tax" style={{ textAlign: "center" }}>
                <Input
                  size="small"
                  // style={{
                  //   width: 90,
                  //   margin: "0 0px",
                  //   color: "#23253C",
                  //   fontWeight: "bold"
                  // }}
                    // value={cartData.reduce((a, c) => a + (c.tax_amount * c.quantity), 0)}
                  value="00"
                  disabled
                />
              </Form.Item>
            </Col>
            <Col span={12} lg={5}>
              <Form.Item label="Discount(%)">
                <Input
                  size="small"
                  // style={{
                  //   width: 80,
                  //   margin: "0 0px",
                  // }}
                //   onChange={(e) => setDiscountPercentage(+e.target.value)}
                />
              </Form.Item>
            </Col>

            <Col span={12} lg={7}>
              <Form.Item label="Services">
                <Input
                  size="small"
                  // style={{
                  //   width: 100,
                  //   margin: "0 0px",
                  // }}
                //   onChange={(e) => setServiceCharge(+e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12} lg={6}>
              <Form.Item label="Adjustment">
                <Input
                  size="small"
                  // style={{
                  //   width: 90,
                  //   margin: "0 0px",
                  // }}
                //   onChange={(e) => setAdjustAmount(+e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="poscalculation__area">
        <div className="pos__calculation__item">
          Total Item :<span>00</span>
        </div>
        <div className="pos__calculation__item">
          SubTotal :<span>00</span>
        </div>
        <div className="pos__calculation__item">
          Total :<span>00</span>
        </div>
      </div>

      <div className="poscalculation__submits">
        <div className="pos__calculation__btn">
          <Button
            icon={<RedoOutlined />}
            size="small"
        //   onClick={resetHandler}
            style={{ width: "30%", marginTop: "15px" }}
          >
            Reset
          </Button>
          <Button
            type="primary"
            icon={<ContainerOutlined />}
            size="small"
            // onClick={draftHandler}
            style={{ width: "30%", marginTop: "15px" }}
          >
            Draft
          </Button>

          <Button
            type="primary"
            icon={<DollarCircleFilled />}
            size="small"
            // onClick={showModal}
            style={{ width: "30%", marginTop: "15px" }}
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PosCalculationBlock;
