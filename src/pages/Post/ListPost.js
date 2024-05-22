import React, { useEffect, useState } from "react";
import TableList from "../../layout/TableList";
import CustomBreadCrumb from "../../layout/CustomBreadCrumb";
import PostService from "../../Services/PostService";
import { useLocation } from 'react-router-dom';
import { Modal, notification } from "antd";

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
        },
        {
            title: "Publicado",
            key: "published",
            dataIndex: "published",
            render: (_, record) => record.published ? 'Sim' : 'Não'
        }
    ];

    const breadCrumbItems = [
        'Notícias',
        'Listagem'
    ];

    function handleOkModal(record) {
        Modal.confirm({
            title: 'Deseja excluir o registro?',
            onOk: async () => {
                const response = await postService.delete(record.id);
                console.log(response);
                getData();
                openNotification();
            }
        })
    }


    return (
        <>
            {contextHolder}
            {/* <CustomBreadCrumb itemsParam={breadCrumbItems} /> */}

            <TableList pathUrl={'posts'} records={posts} columns={columns} handleOkModal={handleOkModal}></TableList>
        </>
    )

}

export default ListPost;