import React, { createContext, useContext, useState } from "react";
import AuthService from "../Services/AuthService";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({ "name": localStorage.getItem("userName"), "token": localStorage.getItem("token") });

    // const login = async (email, password) => {

    //     const response = await service.login(email, password);

    //     if (response.status) {
    //         if (response.status == 200) {
    //             setUser({ "name": response.data.name, "token": response.data.token, "refreshToken": response.data.refreshToken, "isAuthenticated": true })
    //         }
    //     }
    // }

    // async function logout() {
    //     setUser({ ...user, isAuthenticated: false })
    // }

    return (
        <AuthContext.Provider value={{ user }}>
            <>
                {user.token ? children : 'teste'}
            </>
        </AuthContext.Provider>)

}