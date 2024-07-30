import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";


function PrivateRoute({ children }) {

    const navigate = useNavigate();

    const auth = useAuth();

    return (
        <>
            {localStorage.getItem('token') ? children : navigate('/login')}
        </>
    )

}

export default PrivateRoute;