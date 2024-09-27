import React from "react";
import { Button, Flex, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Typography } from 'antd';

const Home = () => {

  
  return (
    <h1>
      Home
    </h1>
  );
};

export default Home;