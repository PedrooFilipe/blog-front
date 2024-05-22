import axios from "axios";

class PostService {

    path = "http://localhost:5041/posts";
    token = "Bearer token";
    headers = { 'Accept': 'application/json' }

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
            response = await axios.get('http://localhost:5041/posts')
        } catch (error) {
            response = error.response;
        }
        return response;

    }

    async update(id, post) {
        return await axios.put(`${this.path}/${id}`, { post }, { headers: { 'Authorization': this.token, 'Accept': this.headers } })
    }

    async show(id) {
        let response = {};
        try{
            response = await axios.get(`http://localhost:5041/posts/${id}`, { headers: { 'Authorization': this.token } });
        }catch(error){
            response = error.response;
        }

        return response;
    }

    async delete(id) {
        return await axios.delete(`${this.path}/${id}`, { headers: { 'Authorization': this.token } })
    }

}

export default PostService;