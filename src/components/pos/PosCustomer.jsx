import { UserAddOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Select, Space } from "antd";
import React, { useState } from "react";
import { AxiosInstance } from "../../utils/Axios";
import UserModalForm from "./UserForm";
import AddUser from "./AddUser";

const PosCustomer = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => AxiosInstance.get("/users?limit=0&skip=0").then((res) => res.data),
  });
  console.log("🚀 ~ Pos ~ users:", users);
  return (
    <>
      <Form className="cart__search__form" style={{ padding: "10px" }}>
        <Space.Compact
          size="default"
          style={{
            width: "100%",
          }}
        >
          <Select
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            style={{
              width: "100%",
            }}
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={users?.users?.map((user, index) => ({
              value: user?.firstName,
              label: user?.firstName,
            }))}
          />
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            size="default"
            onClick={() => setModal1Open(true)}
            style={{
              width: "80px",
              boxShadow: "none",
            }}
          />
        </Space.Compact>
      </Form>
      <AddUser modal1Open={modal1Open} setModal1Open={setModal1Open} />
    </>
  );
};

export default PosCustomer;
