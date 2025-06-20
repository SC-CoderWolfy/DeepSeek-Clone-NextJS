"use client"

import { useUser } from "@clerk/nextjs";
import { createContext, useContext } from "react"


export const AppContext = createContext();


export const useAppContext = () => {


    return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {

    const {user} = useUser();
    



    return <AppContext.Provider value={{user}}>{children}</AppContext.Provider>
}

