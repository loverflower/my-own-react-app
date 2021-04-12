import { filterData } from "./helpers";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "ascend",
    sorter: filterData("name"),
    sortDirections: ["descend", "ascend"],
  },

  {
    title: "Continent",
    dataIndex: "continent",
    defaultSortOrder: "ascend",
    sorter: filterData("continent"),
    sortDirections: ["descend", "ascend"],
    align: "center",
  },
  {
    title: "Code",
    dataIndex: "code",
    defaultSortOrder: "ascend",
    sorter: filterData("code"),
    sortDirections: ["descend", "ascend"],
    align: "center",
    width: 73,
    minWidth: 80,
  },

  {
    title: "Flag",
    dataIndex: "emoji",
    align: "center",
    width: 63,
    minWidth: 70,
  },
];
