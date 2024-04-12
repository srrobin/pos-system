import React from "react";
import { Button, AutoComplete, Space, Upload, Form } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const PosCustomer = () => {
  return (
    // <space>
    //   <AutoComplete
    //     style={{
    //       width: 200,
    //     }}
    //     placeholder="Outlined"
    //   />
    //   <Button type="primary" icon={<UserAddOutlined />} />
    // </space>
    <Form className="cart__search__form" style={{ padding: "10px" }}>
      <Space.Compact
        size="default"
        style={{
          width: "100%",
        }}
      >
        <AutoComplete
          style={{
            width: "100%",
          }}
          className="pos__add__customer__autocomplete"
          name="customer"
          placeholder="Search customer"
        />

        <Button
          type="primary"
          icon={<UserAddOutlined />}
          size="default"
          style={{
            width: "80px",
            boxShadow: "none",
          }}

        />
      </Space.Compact>
    </Form>
  );
};

export default PosCustomer;
