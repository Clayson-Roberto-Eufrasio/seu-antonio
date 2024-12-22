import React, { createContext, useContext , useState } from "react";

// Criação do contexto de autenticação
const AuthContext = createContext()

// Provedor do contexto 
export const AuthProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [thisIsItem, setThisIsItem] = useState("")
    
    const stateModalOpen = (item) => {
        if(item.image_url) {
            setIsOpen(!isOpen)
            setThisIsItem(item)
        }
    }

    const stateModalClose = () => {
        setIsOpen(!isOpen)
    }

    return (
        <AuthContext.Provider 
        value={{ isOpen, thisIsItem, stateModalOpen, stateModalClose }}>
            { children }
        </AuthContext.Provider>
    )
}

// Hook para usar o contexto
export const useAuth = () => {
    return useContext( AuthContext )
}