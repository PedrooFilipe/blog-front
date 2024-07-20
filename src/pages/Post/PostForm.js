import React, { useEffect, useState } from "react";
import { Form, Input, Select, Checkbox, Button, Switch, Flex, message, Upload, Layout } from "antd";
import styles from './PostForm.module.css';
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";


function PostForm({ postParam, onSubmit }) {

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [post, setPost] = useState({})


    useEffect(() => {
        setCategories([{ 'id': 1, 'description': 'POLICIAL' }, { 'id': 2, 'description': 'ENTRETENIMENTO' }])
        if (postParam) {
            setPost(postParam)
        }
    }, [])

    function onChange(e) {
        console.log(e)
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    function onChangeSelect(item) {
        setPost({ ...post, categoryId: item })
    };

    function onChangeEditor(item) {
        console.log(item)
        setPost({ ...post, bodyText: item })
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

    function handleSubmit() {
        onSubmit(post).then((res) => console.log(res)).catch(error => console.log(error))
    }

    return (
        <>
            <div className={styles.form_container}>
                <Form className={styles.form} layout="vertical" onFinish={() => handleSubmit()}>

                    <Flex style={{ flexDirection: 'row', gap: '20px' }}>
                        <Form.Item label="Título" style={{ width: '50%' }}>
                            <Input name="title" autoComplete="false" onChange={onChange} value={post.title} />
                        </Form.Item>
                        <Form.Item label="Subtitulo" style={{ width: '50%' }}>
                            <Input name="subtitle" autoComplete="false" onChange={onChange} value={post.subtitle} />
                        </Form.Item>
                    </Flex>

                    <Flex style={{ flexDirection: 'row', gap: '20px' }}>
                        <Form.Item label="Slug" style={{ width: '50%' }}>
                            <Input name="slug" autoComplete="false" onChange={onChange} value={post.slug} />
                        </Form.Item >
                        <Form.Item label="Categoria" style={{ width: '40%' }}>
                            <Select onChange={onChangeSelect} options={options} value={post.categoryId} />
                        </Form.Item>
                        <Form.Item label="Destaque?" style={{ width: '10%' }}>
                            <Switch onChange={onChangeSwitch} value={post.isHighLight} />
                        </Form.Item>
                    </Flex>

                    <Flex style={{ flexDirection: 'row', gap: '20px' }}>

                        <Form.Item label="Corpo da notícia" style={{ width: '50%' }}>
                            <JoditEditor value={post.bodyText} onChange={(item) => onChangeEditor(item)} />
                        </Form.Item>

                        <Form.Item label="Capa" style={{ width: '50%' }}>
                            <Upload style={{ width: "100%" }} name="avatar" listType="picture-card" showUploadList={false} beforeUpload={beforeUpload} onChange={handleChangeImage}>
                                {post.thumbNail ? (<img src={post.thumbNail} alt="avatar" width="100%" />) : ('+')}
                            </Upload>
                        </Form.Item>

                    </Flex>
                    <div className={styles.footerButtons}>
                        <div className={styles.footerButtonsItems}>
                            <Button type="primary" htmlType="submit"> {postParam ? 'Alterar' : 'Cadastrar'} </Button>
                            <Button type="link" onClick={() => handleGoBack()}> Voltar </Button>
                        </div>
                    </div>

                </Form>
            </div >
        </>
    )

}

export default PostForm;