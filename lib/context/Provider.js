'use client'

import React from "react"
import useStore from "./store";

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  const values = useStore();

  return <Context.Provider value={values}>
    {children}
  </Context.Provider>
} 
