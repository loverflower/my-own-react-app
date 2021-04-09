import "antd/dist/antd.css";
import { Table } from "antd";
import { useContextFunc } from "./../components/ContextProvider";

export const Main = () => {
  let { data } = useContextFunc();
  let dataSorted;
  if (data) {
    dataSorted = data.countries.map((u, i) => {
      return { ...u, key: i + 1, continent: u.continent.name };
    });
  }
  const helper = (name) =>
    function (a, b) {
      if (a[name] < b[name]) return -1;
      if (a[name] > b[name]) return 1;
      return 0;
    };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "ascend",
      sorter: helper("name"),
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Continent",
      dataIndex: "continent",
      defaultSortOrder: "ascend",
      sorter: helper("continent"),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Code",
      dataIndex: "code",
      defaultSortOrder: "ascend",
      sorter: helper("code"),
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Flag",
      dataIndex: "emoji",
    },
  ];

  if (data) {
    return (
      <Table
        columns={columns}
        dataSource={dataSorted}
        sticky={true}
        bordered={true}
      />
    );
  } else return <div>Please wait, DUDE...</div>;
};
