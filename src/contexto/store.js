import React, { createContext, useContext, useReducer } from 'react';
//crear el contexto
export const StateContext = createContext();
//provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//consumer
export const useStateValue = () => useContext(StateContext);