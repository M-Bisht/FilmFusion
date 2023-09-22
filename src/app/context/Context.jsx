"use client";
import React, { createContext, useState } from "react";

export const MainContext = createContext();

const Context = ({ children }) => {
  const [pageLoading, setPageLoading] = useState(false);
  return (
    <MainContext.Provider value={{ pageLoading, setPageLoading }}>
      {children}
    </MainContext.Provider>
  );
};

export default Context;
