import React, { useEffect, useState } from "react";
import CategoryService from "../../Services/CategoryService";
import TableList from "../../layout/TableList";
import { Modal, notification } from "antd";


function ListCategory() {

    const service = new CategoryService();
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        getData();
    });


    async function getData() {
        const response = await service.list()

        if (response.status) {
            setCategories(response.data.data);
        }
    } 

    function handleOkModal(record) {
        Modal.confirm({
            title: 'Deseja excluir o registro?',
            onOk: async () => {
                const response = await service.delete(record.id);
                getData();
                // openNotification();
            }
        })
    }


    const columns = [
        {
            title: "Código",
            key: "id",
            dataIndex: "id"
        },
        {
            title: "Descrição",
            key: "description",
            dataIndex: "description"
        },
        {
            title: "Slug",
            key: "slug",
            dataIndex: "slug"
        },
    ];

    return (
        <>
            {/* {contextHolder} */}

            <TableList pathUrl={'categories'} records={categories} columns={columns} handleOkModal={handleOkModal}></TableList>
        </>
    )

}

export default ListCategory;