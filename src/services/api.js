import axios from "axios";

const api = axios.create({
    baseURL: "https://my-banckend.herokuapp.com"
});

export default api;