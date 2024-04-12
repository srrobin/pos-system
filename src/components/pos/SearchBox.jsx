import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBox = () => {
  return (
    <Input
      placeholder="Search here"
      onSearch={onSearch}
      prefix={<SearchOutlined />}
    />
  );
};

export default SearchBox;
