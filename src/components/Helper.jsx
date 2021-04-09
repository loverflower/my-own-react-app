export const getData = function (data, setData) {
  setData((prev) => (prev = data));
};

export const hidePreloader = function (setPreloader) {
  setPreloader((prev) => (prev = false));
};

export const helpSorting = (name) =>
  function (a, b) {
    if (a[name] < b[name]) return -1;
    if (a[name] > b[name]) return 1;
    return 0;
  };

export const helpMemodataSorted = function (data) {
  if (!data) return;
  return data.countries.map((u, i) => {
    return { ...u, key: i + 1, continent: u.continent.name };
  });
};
