import React, { createContext, useContext, useEffect, useState } from "react";
import { getDataFromApi } from "../api/dal";

export const ContextAll = createContext();
export const useContextFunc = () => {
  return useContext(ContextAll);
};

export const ContextProvider = ({ children }) => {
  const [isPreloading, setPreloader] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getDataFromApi(setData, setPreloader);
  }, []);

  return (
    <ContextAll.Provider value={{ isPreloading, data }}>
      {children}
    </ContextAll.Provider>
  );
};
