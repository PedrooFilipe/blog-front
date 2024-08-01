import React, { createContext, useContext } from "react";
import { request } from "../Services/api";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const login = async (loginUser) => {

        const response = await request({ url: 'auth/login', method: 'post', bodyData: loginUser });
        localStorage.setItem('token', response.data.name);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('token', response.data.refreshToken);
        navigate('/');
    }

    const logout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ login, logout }}>
            <>
                {children}
            </>
        </AuthContext.Provider>)

}

export const useAuth = () => {
    return useContext(AuthContext);
}