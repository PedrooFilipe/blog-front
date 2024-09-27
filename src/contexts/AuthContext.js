import React, { createContext, useContext, useState } from "react";
import { request } from "../Services/api";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const login = async (data) => {

        localStorage.setItem('name', data.name);
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        setIsAuthenticated(true);
    }

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            <>
                {children}
            </>
        </AuthContext.Provider>)

}

export const useAuth = () => useContext(AuthContext);