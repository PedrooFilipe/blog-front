import React, { useEffect, useState } from "react";
import { Form, Input, Select, Checkbox, Button, Switch, Flex, message, Upload } from "antd";
import styles from './PostForm.module.css';
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";


function PostForm({ postParam, onCreate }) {

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setCategories([{ 'id': 1, 'description': 'POLICIAL' }, { 'id': 2, 'description': 'ENTRETENIMENTO' }])
        if (postParam) {
            setPost(postParam)
        }
    }, [])

    console.log(post)

    function onChange(e) {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    function onChangeSelect(item) {
        setPost({ ...post, categoryId: item })
    };

    function onChangeSwitch(checked) {
        setPost({ ...post, isHighLight: checked })
    }

    const options = categories.map(function (category) {
        return {
            label: category.description,
            value: category.id
        }
    })

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };

    const handleChangeImage = (info) => {
        getBase64(info.file.originFileObj, (url) => {
            setPost({ ...post, thumbNail: url })
        });
    };

    function handleGoBack() {
        navigate('/posts');
    }

    function handleCreate() {
        onCreate(post).then((res) => console.log(res)).catch(error => console.log(error))
    }

    return (
        <>
            <div className={styles.form_container}>
                <Form className={styles.form} layout="vertical" onFinish={() => handleCreate()}>
                    <Form.Item label="Título" rules={[
                        {
                            required: true,
                        },
                    ]}>
                        <Input name="title" autoComplete="false" onChange={onChange} value={post.title} />
                    </Form.Item>
                    <Form.Item label="Subtitulo">
                        <Input name="subtitle" autoComplete="false" onChange={onChange} value={post.subtitle} />
                    </Form.Item>
                    <Form.Item label="Slug">
                        <Input name="slug" autoComplete="false" onChange={onChange} value={post.slug} />
                    </Form.Item>
                    <Form.Item label="Categoria">
                        <Select onChange={onChangeSelect} options={options} value={post.categoryId} />
                    </Form.Item>
                    <Form.Item label="Destaque?">
                        <Switch onChange={onChangeSwitch} defaultValue={post.isHighLight} />
                    </Form.Item>
                    <Form.Item label="Corpo da notícia">
                        <TextArea name="bodyText" rows={6} onChange={onChange} value={post.bodyText}/>
                    </Form.Item>


                    <Form.Item>
                        <Upload name="avatar" listType="picture-card" className="avatar-uploader" showUploadList={false} beforeUpload={beforeUpload} onChange={handleChangeImage}>
                            {post.thumbNail ? (<img src={post.thumbNail} alt="avatar" style={{ width: '100%', }} />) : ('+')}
                        </Upload>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit"> Cadastrar </Button>
                        <Button type="link" onClick={() => handleGoBack()}> Voltar </Button>
                    </Form.Item>

                </Form>
            </div >
        </>
    )

}

export default PostForm;