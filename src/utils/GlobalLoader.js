import React from "react";
import { Spin } from "antd";

const contentStyle = {
  padding: " 50px",
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: " 4px"
};
const GlobalLoader = () => {
  return (
    <div>
      <Spin tip="Loading ..." size="large">
        <div style={contentStyle} />
      </Spin>
    </div>
  );
};

export default GlobalLoader;
