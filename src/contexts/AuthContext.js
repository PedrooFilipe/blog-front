import React, { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({ "name": "", "isAuthenticated": false });

    async function login() {
        //Enviar req para a api
    }


    async function logout() {
        setUser({ ...user, isAuthenticated: false })
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <>
            {user.isAuthenticated ? children : 'teste'}
            </>
        </AuthContext.Provider>)

}