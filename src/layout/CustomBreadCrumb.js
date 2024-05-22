import { Breadcrumb } from "antd";
import React from "react";

function CustomBreadCrumb({itemsParam}) {

    const items = [
        'Home'
    ]

    itemsParam.forEach(item => {
        items.push(item);
    });

    return (
        <>
            <Breadcrumb items={items} /> 
        </>
    )
}

export default CustomBreadCrumb;