/* eslint-disable max-len */
import React from "react";
import { CoffeeOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import GlobalLoader from "../utils/GlobalLoader";

const boxStyle = {
  height: "100vh",
  display: "grid",
  placeItems: "center"
};
const homeStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
};
const Home = () => {
  return (
    <div style={boxStyle}>
      <span style={homeStyle}>
        <h2>A point of sale (POS)</h2><br />
        <Link to="/pos">
          <Button type="primary" icon={<CoffeeOutlined />}>
            POS
          </Button>
          <GlobalLoader />
        </Link>
      </span>
    </div>

  );
};

export default Home;
