import React, { useEffect, useState } from "react";
import TableList from "../../layout/TableList";
import CustomBreadCrumb from "../../layout/CustomBreadCrumb";
import PostService from "../../Services/PostService";
import { useLocation } from 'react-router-dom';
import { notification } from "antd";

function ListPost() {

    const postService = new PostService();
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        if (location.state) {
            openNotification();
            window.history.replaceState({}, '');
        }
        getData();


    }, [])

    const openNotification = () => {
        api.open({
            message: 'Dados salvos com sucesso!',
            duration: 3,
        });
    };

    async function getData() {
        const response = await postService.list()

        if (response.status) {
            setPosts(response.data);
        }
    }


    const columns = [
        {
            title: "Titulo",
            key: "title",
            dataIndex: "title"
        }
    ];

    const breadCrumbItems = [
        'Notícias',
        'Listagem'
    ];


    return (
        <>
            {contextHolder}
            <CustomBreadCrumb itemsParam={breadCrumbItems} />

            <TableList pathUrl={'posts'} records={posts} columns={columns}></TableList>
        </>
    )

}

export default ListPost;