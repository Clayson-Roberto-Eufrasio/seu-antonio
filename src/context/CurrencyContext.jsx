import React, {  createContext, useContext, useRef, useState,  } from "react"; 

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {

    const [isFixed, setIsFixed] = useState(false);
    const headerRef = useRef(null);
    const placeholderRef = useRef(null);
  
    const handleScroll = () => {
      if (headerRef.current && placeholderRef.current) {
        const headerTop = placeholderRef.current.getBoundingClientRect().top;
        setIsFixed(headerTop <= 0);
      }
    };
    
    return (
        <CurrencyContext.Provider value={{ isFixed, headerRef, placeholderRef, handleScroll }}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => useContext(CurrencyContext)
