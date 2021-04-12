import "antd/dist/antd.css";
import { Table } from "antd";
import { useContextFunc } from "../contexts/ContextProvider";
import { useMemo } from "react";
import { getSortedData } from "../helpers/helpers";
import { columns } from "../helpers/static";
import { Caption } from "./Caption";

export const Main = () => {
  const { data } = useContextFunc();
  const dataSorted = useMemo(() => {
    return getSortedData(data);
  }, [data]);

  if (data) {
    return (
      <>
        <Caption />
        <Table
          pagination={{ position: ["bottomCenter"] }}
          columns={columns}
          dataSource={dataSorted}
          sticky={true}
          bordered={true}
        />
      </>
    );
  } else {
    return "";
  }
};
