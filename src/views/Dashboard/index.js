import { Table, Pagination } from "antd";
import React from "react";
import getAllService from "../../services/table.service"
function Dashboard() {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [current, setCurrent] = React.useState(1);

  const onChange = (page) => {
    setCurrent(page)
  }

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return <p>{text}</p>
      }
    },
    {
      title: "unit",
      dataIndex: "unit",
      key: "unit",
    },
  ];

  React.useEffect(() => {
    setLoading(true)
    getAllService.table(current).then((res) => {
      setData(res.data);
    }).finally(() => {
      setLoading(false)
    });
  }, [current]);

  return (
    <div>
      <Table
        style={{ margin: "20px" }}
        dataSource={data.items}
        columns={columns}
        loading={loading}
        pagination={false}
      />
      <Pagination current={current} onChange={onChange} pageSize={100} showSizeChanger={false} total={data.total_count} />;
    </div>
  );
}

export default Dashboard;
