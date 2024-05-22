import React from "react";
import PostForm from "./PostForm";
import PostService from "../../Services/PostService"
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

function CreatePost() {

    const navigate = useNavigate();
    const postService = new PostService();

    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            message: 'Erro ao salvar',
            duration: 3,
        });
    };

    async function handleCreate(post) {
        const response = await postService.createAsync(post);

        if (response.status == 201) {
            navigate('/posts', { state: { message: 'Dados salvos com sucesso' } })
        } else if (response.status == 400) {
            openNotification();
        }
    }

    return (
        <>
            {contextHolder}
            <PostForm onSubmit={handleCreate} />
        </>
    )

}

export default CreatePost;