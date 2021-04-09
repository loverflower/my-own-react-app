import React, { createContext, useContext, useEffect, useState } from "react";

export const ContextAll = createContext();
export const useContextFunc = () => {
  return useContext(ContextAll);
};

export const ContextProvider = ({ children }) => {
  const [isPreloading, setPreloader] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getData = function (data) {
    setData(data);
  };

  const hidePreloader = function () {
    setPreloader(false);
  };

  const getDataFromApi = function () {
    fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        {
          countries {
           name
           code
           emoji
           continent {
             name
           }
         }
           }
           `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        getData(res.data);
        hidePreloader();
      });
  };
  return (
    <ContextAll.Provider value={{ isPreloading, data }}>
      {children}
    </ContextAll.Provider>
  );
};
