import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        const data = getLocalStorage();

        if (data) {
            setEmployees(data.employees || []);
            setAdmin(data.admin || []);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ employees, admin }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;