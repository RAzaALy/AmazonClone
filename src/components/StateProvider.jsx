//track the cart:
import React, { createContext, useContext, useReducer } from "react";

//Data layer:
export const stateContext = createContext();

//build provider:
export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

//consumer:
export const Consumer = () => useContext(stateContext);