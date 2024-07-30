import { Col, Form, Input } from "antd";
import React, { useState } from "react";
import { request } from "../../Services/api";

export default function CreateCategory() {

    const [category, setCategory] = useState({});


    const onFinish = async => {
        request({ url: 'categories', method: 'post', bodyData: category })
    }

    return (
        <>
            <Form>
                <Form.Item label=""> 
                    <Input >
                    </Input>
                </Form.Item>
            </Form>


        </>)


}