import React, { createContext, useContext , useState } from "react";

import BruchettaPolvo from "../../images/Aperitivos/BruchettaPolvoLogo.webp"
import PoseidonReiDosMares from "../../images/ParaCompartilhar/PseidonLogo.webp"
import CamaraoNoVAral from "../../images/Entradas/CamaraoNoVaralLogo.webp"
import SalmaoAValenciana from "../../images/Principais/SalmaoAValencianaLogo.webp"
import TridenteDrink from "../../images/DrinksAlcolicos/TridendeLogo.webp"
import GinTonica from "../../images/DrinksAlcolicos/GinTonicaLogo.webp"
import SodaItaliana from "../../images/DrinksAlcolicos/SodaFrutasVermelhasLogo.webp"
import MoscowMule from "../../images/DrinksAlcolicos/MoscowLogo.webp"
import GranGateau from "../../images/Sobremesas/GranGateauModal.webp"

// Criação do contexto de autenticação
const AuthContext = createContext()

// Provedor do contexto 
export const AuthProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [thisIsItem, setThisIsItem] = useState("")
    const [thisIsImageHeader, setThisIsImageHeader] = useState(CamaraoNoVAral)
    
    const stateModalOpen = (item) => {
        if(item.image_url) {
            setIsOpen(!isOpen)
            setThisIsItem(item)
        }
    }

    const stateModalClose = () => {
        setIsOpen(!isOpen)
    }

    const toggleBetweenHeaderImages = (category) => {
        switch(category) {
            case "Appetizer":
                setThisIsImageHeader(BruchettaPolvo);
                break;
            case "Appetizers":
                setThisIsImageHeader(CamaraoNoVAral);
                break;
            case "Mains":
                setThisIsImageHeader(SalmaoAValenciana);
                break;            
            case "ToShare": 
                setThisIsImageHeader(PoseidonReiDosMares);
                break;
            case "Kids":
                setThisIsImageHeader(PoseidonReiDosMares)
                break;
            case "Desserts":
                setThisIsImageHeader(GranGateau);
                break;            
            case "ClassicDrinks":
                setThisIsImageHeader(MoscowMule);
                break;
            case "Exclusive":
                setThisIsImageHeader(TridenteDrink);
                break;            
            case "SoftDrinks": 
                setThisIsImageHeader(GinTonica);
                break;
            case "NonAlcoholicDrinks":
                setThisIsImageHeader(SodaItaliana)
                break;
            case "Beers":
                setThisIsImageHeader(CamaraoNoVAral);
                break;
            case "Doses":
                setThisIsImageHeader(BruchettaPolvo);
                break;
            case "Bottles":
                setThisIsImageHeader(SalmaoAValenciana);
                break;            
            case "Combos": 
                setThisIsImageHeader(PoseidonReiDosMares);
                break;
            case "Espumant":
                setThisIsImageHeader(PoseidonReiDosMares)
                break;
            case "Champagnes":
                setThisIsImageHeader(GranGateau);
                break;            
            case "WineWhite":
                setThisIsImageHeader(MoscowMule);
                break;
            case "WineRose":
                setThisIsImageHeader(TridenteDrink);
                break;            
            case "WineTinto": 
                setThisIsImageHeader(GinTonica);
                break;
            default:
                setThisIsImageHeader(thisIsImageHeader);
                break;               
        }
    }

    return (
        <AuthContext.Provider 
        value={{ isOpen, thisIsItem, thisIsImageHeader,  stateModalOpen, stateModalClose, toggleBetweenHeaderImages }}>
            { children }
        </AuthContext.Provider>
    )
}

// Hook para usar o contexto
export const useAuth = () => {
    return useContext( AuthContext )
}