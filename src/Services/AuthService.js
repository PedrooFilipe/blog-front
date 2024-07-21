import axios from "axios";

class AuthService {

    async login(email, password) {
        let response = {};
        try {
            response = await axios.post('http://localhost:5041/auth/login', {email, password});
            console.log(response)
        } catch (error) {
            response = error.response;
        }

        return response;
    }

}

export default AuthService;