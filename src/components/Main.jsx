import "antd/dist/antd.css";
import s from "./Main.module.css";
import { Table } from "antd";
import { useContextFunc } from "./../components/ContextProvider";
import { useMemo } from "react";
import { helpMemodataSorted, helpSorting } from "./Helper";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "ascend",
    sorter: helpSorting("name"),
    sortDirections: ["descend", "ascend"],
  },

  {
    title: "Continent",
    dataIndex: "continent",
    defaultSortOrder: "ascend",
    sorter: helpSorting("continent"),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Code",
    dataIndex: "code",
    defaultSortOrder: "ascend",
    sorter: helpSorting("code"),
    sortDirections: ["descend", "ascend"],
  },

  {
    title: "Flag",
    dataIndex: "emoji",
  },
];

export const Main = () => {
  let { data } = useContextFunc();

  const dataSorted = useMemo(() => {
    return helpMemodataSorted(data);
  }, [data]);

  if (data) {
    return (
      <Table
        pagination={{ position: ["bottomCenter"] }}
        columns={columns}
        dataSource={dataSorted}
        sticky={true}
        bordered={true}
      />
    );
  } else {
    return <div className={s.dude}>Please wait, DUDE...</div>;
  }
};
