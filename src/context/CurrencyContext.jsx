import React, {  createContext, useContext, useState,  } from "react"; 

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {

    const [test, setTest] = useState("oi")
    
    return (
        <CurrencyContext.Provider value={{ test }}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => useContext(CurrencyContext)
