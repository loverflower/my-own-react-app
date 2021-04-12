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
    title: "Continent",
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

export const addFiltration = (obj) => {
  columns[0] = { ...columns[0], ...obj };
};
