import React from "react";
import { ContainerOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const DraftButton = () => {
  return (
    <Tooltip placement="top" title="It's Premium">
      <ContainerOutlined style={{ fontSize: "25px", cursor: "pointer" }} />
    </Tooltip>
  );
};

export default DraftButton;
