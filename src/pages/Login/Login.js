import { Button, Form, Input } from "antd";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthService from "../../Services/AuthService";


function Login() {
    const service = new AuthService();
    // const nome  = useContext(AuthContext);
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState([]);

    // console.log(nome)

    function handleChange(e) {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            navigate('/');
        }

    }, [])

    async function handleSubmit() {
        const response = await service.login(loginUser.email, loginUser.password);

        if (response.status) {
            if (response.status == 200) {
                localStorage.setItem('token', response.data.token);
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