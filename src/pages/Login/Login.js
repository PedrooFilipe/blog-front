import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


function Login() {
    const auth = useAuth(); 
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState([]);

    function handleChange(e) {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }

    }, [])

    async function handleSubmit() {
        auth.login(loginUser);
    }

    return (
        <>
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