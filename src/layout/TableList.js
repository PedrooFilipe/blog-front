import { Breadcrumb, Button, Flex, Space, Table } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function TableList({ records, columns, handleOkModal }) {

    const navigate = useNavigate();

    function handleCreate() {
        navigate('create')
    }

    function handleEdit(record) {
        navigate(`edit/${record.id}`)
    }

    function handleDelete(record) {
        handleOkModal(record)
    }

    const defaultColumn = {
        title: "Ações",
        key: "actions",
        dataIndex: "",
        render: (_, record) =>
            <Space>
                <Button onClick={() => handleEdit(record)} type="link" >Alterar</Button>
                <Button onClick={() => handleDelete(record)} type="link" >Excluir</Button>
            </Space>
    }

    columns.push(defaultColumn);

    const itemsBreadCrumb = [
        {
            title: 'Home',
        },
        {
            title: 'Notícias',
        },
        {
            title: 'Listagem',
        }
    ]

    return (
        <>
            <Flex style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Breadcrumb items={itemsBreadCrumb} />
                <Button type="primary" onClick={() => handleCreate()}>Cadastrar</Button>
            </Flex>
            <Table dataSource={records} columns={columns} style={{ marginTop: '20px' }} />
        </>
    )
}

export default TableList;