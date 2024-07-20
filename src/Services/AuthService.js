import axios from "axios";

class AuthService {

    async Login(loginUser) {
        let response = {};
        try {
            response = await axios.post('http://localhost:5041/auth', loginUser);
            console.log(response)
        } catch (error) {
            response = error.response;
        }

        return response;
    }

}

export default AuthService;