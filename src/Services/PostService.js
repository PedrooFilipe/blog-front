import axios from "axios";

class PostService {

    path = "http://localhost:5041/posts";
    token = "Bearer token";
    headers = { 'Accept': 'application/json' }
    authToken = "";

    constructor(authToken) {
        this.authToken = authToken;
    }

    async createAsync(post) {
        let response = {};
        try {
            response = await axios.post(this.path, post, { headers: { 'Content-Type': 'application/json' } })
        } catch (error) {
            response = error.response;
        }

        return response;
    }

    async list() {

        let response = {};
        try {
            response = await axios.get('http://localhost:5041/posts', {headers: [{'Content-Type': 'application/json' }, {'Authorization': `Bearer ${localStorage.getItem("token")}`}] })
        } catch (error) {
            console.log('deu erro');
            response = error.response;
        }
        return response;

    }

    async update(post) {
        let response = {};
        try {
            return await axios.put(`${this.path}/${post.id}`, post , { headers: { 'Authorization': this.token, 'Accept': this.headers } })
        } catch (error) {
            response = error.response;
            console.log(response);
        }
        return response;
    }

    async show(id) {
        let response = {};
        try {
            response = await axios.get(`http://localhost:5041/posts/${id}`, { headers: { 'Authorization': this.token } });
        } catch (error) {
            response = error.response;
        }

        return response;
    }

    async delete(id) {
        let response = {};
        try {
            response = await axios.delete(`http://localhost:5041/posts/${id}`, { headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjExIiwiZXhwIjoxNzIxNTI3NjQ5fQ.mgMAkDKnGp8ELePX8JdGgcMAbdYQVFQJJD-LL7ZihDU' } })
        } catch (error) {
            response = error.response;
        }

        return response;
    }

}

export default PostService;