import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('English');

    return (
        <SessionContext.Provider value={{ theme, setTheme, language, setLanguage }}>
            {children}
        </SessionContext.Provider>
    );
};
export const useSession = () => {
    return useContext(SessionContext);
};
