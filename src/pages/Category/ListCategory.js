import React, { useEffect, useState } from "react";
import TableList from "../../layout/TableList";
import { Modal, notification } from "antd";
import { request } from "../../Services/api";


function ListCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getData();
    }, []);


    async function getData() {
        const response = await request({ url: "categories" })

        setCategories(response.data.data);
    }

    function handleOkModal(record) {
        Modal.confirm({
            title: 'Deseja excluir o registro?',
            onOk: async () => {
                const response = await request({url: 'categories', method: 'delete', queryParams: record.id});
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

    const breadCrumbItems = [{
        name: 'Categorias'
    },
    {
        name: 'Listagem'
    }]

    return (
        <>
            {/* {contextHolder} */}

            <TableList pathUrl={'categories'} records={categories} columns={columns} handleOkModal={handleOkModal} breadCrumbItems={breadCrumbItems} ></TableList>
        </>
    )

}

export default ListCategory;