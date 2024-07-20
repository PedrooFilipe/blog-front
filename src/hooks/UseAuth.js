import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useAuth() {

    const navigate = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem('authorizationToken')){
            navigate('/login');
        }
    }, []);

}

export default useAuth;