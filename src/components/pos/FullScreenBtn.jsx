import React from "react";
import { ExpandOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const FullScreenBtn = () => {
  return (
    <Tooltip placement="top" title="Full Sereen">
      <ExpandOutlined style={{ fontSize: "25px", cursor: "pointer" }} />
    </Tooltip>
  );
};

export default FullScreenBtn;
