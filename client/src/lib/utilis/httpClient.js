import axios from "axios";

export const httpClient = axios.create({
    baseURL: "http://localhost:3000/api",
});

const API_URL = "http://localhost:3000/api";

export async function getRequest(path, params = {}) {
    let response = await axios
        .get(`${API_URL}/${path}`, { params })
        .then((r) => {
            return r;
        })
        .catch((e) => console.log(e));
        
    return response;
}

export async function postRequest(path, data) {
    let response = await axios
        .post(`${API_URL}/${path}`, data)
        .then((r) => {
            return r;
        })
        .catch((e) => console.log(e));
        
    return response;
}

export default {
    getRequest,
    postRequest,
    httpClient,
}