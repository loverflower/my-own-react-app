import "antd/dist/antd.css";
import { Table } from "antd";
import { useContextFunc } from "../contexts/ContextProvider";
import { useMemo, useState } from "react";
import { getSortedData } from "../helpers/helpers";
import { columns } from "../helpers/static";
import { Caption } from "./Caption";
import React from "react";
import { addFiltration, getFiltredData } from "../helpers/filtration";

export const Main = () => {
  const { data } = useContextFunc();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const dataSorted = useMemo(() => {
    return getSortedData(data);
  }, [data]);
  const param = [searchText, searchedColumn, setSearchText, setSearchedColumn];

  if (data) {
    addFiltration(getFiltredData(...param, "name"), "name");
    addFiltration(getFiltredData(...param, "code"), "code");

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
