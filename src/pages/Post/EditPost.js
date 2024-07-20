import React, { useEffect, useState } from "react";
import PostForm from "./PostForm";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../../Services/PostService";

function EditPost() {

    const navigate = useNavigate();
    const postService = new PostService();
    const { id } = useParams();
    const [post, setPost] = useState();
    
    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await postService.show(id);
        setPost(response.data);
    }

    async function onSubmit(post) {
        const response = await postService.update(post);

        if (response.status === 200) {
            navigate('/posts', { state: { message: 'Dados salvos com sucesso' } })
        } else if (response.status === 400) {
            // openNotification();
        }
    }

    return (
        <>
            {post && <PostForm postParam={post} onSubmit={onSubmit} />}
        </>
    )


}

export default EditPost;