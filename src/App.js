import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import { Flex, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

function App() {

  const navigate = useNavigate();

  const menuItems = [
    { 'label': 'Notícias', 'key': 'posts' },
    { 'label': 'Categorias', 'key': 'categories' }
  ]

  function handleOnClickMenu(item) {
    navigate(item.key)
  }

  return (
    <div className="App">

      <Layout style={{ minHeight: '100vh' }}>
        <Header >
          <Flex style={{ color: 'white', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
            <h3>Blog</h3>
            Usuário
          </Flex>
        </Header>

        <Layout>
          <Sider width={200}>
            <Menu mode="inline" items={menuItems} style={{ height: '100%', border: 0 }} onClick={(item) => handleOnClickMenu(item)} />
          </Sider>

          <Layout style={{padding: '0 24px 24px'}}>

            <Content style={{padding: 24,margin: 0,minHeight: 280,height: '100%'}}>
              <Outlet />
            </Content>

          </Layout>
        </Layout>

      </Layout>


    </div>
  );
}

export default App;