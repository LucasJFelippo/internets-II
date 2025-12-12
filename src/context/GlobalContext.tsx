"use client";

import { GlobalContextType } from "@/types/global";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

    const [activeSection, setActiveSection] = useState<"news" | "company" | null>(null);

    return (
        <GlobalContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("useGlobal deve ser usado dentro de um <GlobalProvider>");
    }

    return context;
};