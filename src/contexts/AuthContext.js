import React, { createContext, useContext, useState } from "react";
import { request } from "../Services/api";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


    const [user, setUser] = useState({ "name": localStorage.getItem("userName"), "token": localStorage.getItem("token") });
    const navigate = useNavigate();

    const login = async (loginUser) => {

        const response = await request({ url: 'auth/login', method: 'post', bodyData: loginUser });
        setUser({ "name": response.name, "token": response.token, "refreshToken": response.refreshToken, "isAuthenticated": true })
        localStorage.setItem('token', response.token);
        navigate('/');

    }

    const logout = () => {
        setUser({ ...user, isAuthenticated: false })
        localStorage.removeItem("token");
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            <>
                {children}
            </>
        </AuthContext.Provider>)

}

export const useAuth = () => {
    return useContext(AuthContext);
}