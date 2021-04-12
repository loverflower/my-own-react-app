import { filterData } from "./helpers";
import { filterContinent } from "./helpers";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    defaultSortOrder: "ascend",
    sorter: filterData("name"),
    sortDirections: ["descend", "ascend"],
  },

  {
    title: "Cont",
    dataIndex: "continent",
    defaultSortOrder: "ascend",
    sorter: filterData("continent"),
    filters: [
      filterContinent("Africa"),
      filterContinent("Antarctica"),
      filterContinent("Asia"),
      filterContinent("Europe"),
      filterContinent("North America"),
      filterContinent("Oceania"),
      filterContinent("South America"),
    ],
    onFilter: (value, record) => {
      return record.continent === value;
    },
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Code",
    dataIndex: "code",
    defaultSortOrder: "ascend",
    sorter: filterData("code"),
    sortDirections: ["descend", "ascend"],
    align: "center",
    width: 95,
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

export const addFiltration = (obj, name) => {
  columns.forEach((el, i) => {
    if (el.dataIndex === name) {
      columns[i] = { ...el, ...obj };
    }
  });
};
