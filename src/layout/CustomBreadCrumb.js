import { Breadcrumb } from "antd";
import React from "react";

function CustomBreadCrumb({itemsParam}) {

    const items = [
        {title: 'Home'}
    ]

    itemsParam.forEach(item => {
        items.push({title: item});
    });

    return (
        <>
            <Breadcrumb items={items} /> 
        </>
    )
}

export default CustomBreadCrumb;