import { Table } from "antd";
import React from "react";
import { useEffect } from "react";
import getAllService from "./../../services/table.service";
function Dashboard() {
  const [data, setData] = React.useState("");
  const dataSource = [
    {
      key: "1",
      id: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      id: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  useEffect(() => {
    getAllService.table().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div>
      <Table
        style={{ marginTop: "20px" }}
        dataSource={data.map((items) => ({ key: items, id: items.id, }))}
        columns={columns}
      />
      ;
    </div>
  );
}

export default Dashboard;
