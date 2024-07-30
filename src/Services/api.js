import axios from "axios";

export const request = async ({method = "get", headers = {}, url, bodyData, queryParams}) => {

    const baseUrl = "localhost:5041"
    const token = localStorage.getItem("token");

    const config = {
        method,
        baseURL: `http://${baseUrl}/${url}`,
        data: bodyData,
        params: queryParams,
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
            ...headers,
          },
    }

    let result;

    try {
        result = await axios(config);

    } catch (error) {

        console.log(error)

        if (error.response.status == 401) {
            console.log('nao autorizado');
        }
    }

    return result;
}