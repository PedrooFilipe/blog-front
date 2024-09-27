import React from "react";

import { Button, Flex, Layout, Menu, Typography } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const { Title } = Typography;

const MainLayout = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        console.log(auth);
        auth.logout();
        navigate('/');
    };

    const handleOnClickMenu = (item) => {
        navigate(item.key); // Navega para a rota baseada na chave do item
    };

    const menuItems = [
        { key: '/home', label: 'Home' },
        { key: '/categories', label: 'Categorias' },
        { key: '/posts', label: 'Publicações' },
        // outros itens do menu
    ];

    return (
        <Layout className="h-screen">
            <Header>
                <Flex style={{ color: 'white', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
                    <Title level={2} style={{color: 'white'}}>FPNews</Title>
                    <Button onClick={logout}>Sair</Button>
                </Flex>
            </Header>

            <Layout>
                <Sider width={200}>
                    <Menu mode="inline" items={menuItems} style={{ height: '100%', border: 0 }} onClick={handleOnClickMenu} />
                </Sider>

                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default MainLayout;
