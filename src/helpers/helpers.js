export const getData = (data, setData) => {
  setData((prev) => (prev = data));
};

export const hidePreloader = (setPreloader) => {
  setPreloader((prev) => (prev = false));
};

export const filterData = (name) =>
  function (a, b) {
    if (a[name] < b[name]) return -1;
    if (a[name] > b[name]) return 1;
    return 0;
  };

export const getSortedData = (data) => {
  if (!data) return;
  return data.countries.map((country, i) => {
    return { ...country, key: i + 1, continent: country.continent.name };
  });
};

export const filterContinent = (continent) => {
  return {
    text: continent,
    value: continent,
  };
};
