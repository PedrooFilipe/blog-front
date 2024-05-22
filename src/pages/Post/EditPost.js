import React, { useEffect, useState } from "react";
import PostForm from "./PostForm";
import { useParams } from "react-router-dom";
import PostService from "../../Services/PostService";

function EditPost() {

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

    return (
        <>
            {post && <PostForm postParam={post} />}
        </>
    )


}

export default EditPost;