import { Button, Space, Table } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function TableList({ pathUrl, records, columns }) {

    const navigate = useNavigate();

    function handleCreate() {
        navigate('create')
    }

    function handleEdit(record) {
         navigate(`edit/${record.id}`)
    }

    function handleDelete(record) {
        console.log(`Excluindo ${pathUrl}`);
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

    return (
        <>
            <div>
                <Button onClick={() => handleCreate()}>Cadastrar</Button>
            </div>
            <Table dataSource={records} columns={columns}></Table>
        </>
    )
}

export default TableList;