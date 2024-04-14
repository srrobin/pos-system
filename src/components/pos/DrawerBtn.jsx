import { Button, Tooltip } from "antd";
import React from "react";
import { MoreOutlined } from "@ant-design/icons";

const DrawerBtn = () => {
  return (
    <Tooltip placement="top" title="POS MENU">
      <MoreOutlined style={{ fontSize: "25px", cursor: "pointer" }} />
    </Tooltip>
  );
};

export default DrawerBtn;
