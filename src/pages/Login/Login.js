import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";

function Login() {
    const authService = new AuthService();
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({});

    function handleChange(e) {
        setLoginUser({...loginUser, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        const token = localStorage.getItem('authorizationToken');

        if (token) {
            navigate('/');
        }

    }, [])

    async function handleSubmit() {
        const response = await authService.Login(loginUser);
        if (response.status) {
            if (response.status == 200) {
                localStorage.setItem('authorizationToken', response.data.token);
                navigate('/');
            }
        }
    }

    return (
        <>
        <Outlet />
            <Form onFinish={handleSubmit}>
                <Form.Item label="Email">
                    <Input name="email" onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input.Password name="password" onChange={handleChange} />
                </Form.Item>

                <Button type="primary" htmlType="submit" >Entrar</Button>
            </Form>
        </>
    )
}

export default Login;