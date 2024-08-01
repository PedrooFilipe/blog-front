import React from "react";
import { useNavigate } from "react-router-dom";


function PrivateRoute({ children }) {

    const navigate = useNavigate();

    return (
        <>
            {localStorage.getItem('token') ? children : navigate('/login')}
        </>
    )

}

export default PrivateRoute;