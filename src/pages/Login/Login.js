import { Button, Form, Input, Layout } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { request } from "../../Services/api";


function Login() {
    const auth = useAuth(); 
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState([]);

    function handleChange(e) {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/home');
        }

    }, [])

    async function handleSubmit() {

        const result = await request({url: 'auth/login', method: 'post', bodyData: loginUser});
        auth.login(result.data);
        navigate('/home');
    }

    return (
        <>


        <div className="flex justify-center h-screen items-center bg-[#F6F8FB]">


        <div className="flex flex-col w-1/3 mx-auto my-0 bg-white p-7 border rounded-md items-center">

            <span className="mb-3 text-2xl">FPNews</span>


            <Form className="flex flex-col items-center w-[85%]" onFinish={handleSubmit} layout="vertical">
                    <Form.Item label="Email" className="w-full" rules={[{ required: true, message: 'Por favor insira seu email!' }]}>
                        <Input name="email" onChange={handleChange} />
                    </Form.Item>
                    <Form.Item label="Senha" className="w-full">
                        <Input.Password name="password" onChange={handleChange} />
                    </Form.Item>

                    <Button className="w-[40%]" type="primary" htmlType="submit" >Entrar</Button>
            </Form>

            <span className="mt-3 text-sm">Esqueceu a senha?</span>


        </div>


        

        </div>


            
        </>
    )
}

export default Login;