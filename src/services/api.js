import axios from "axios";

const api = axios.create({
    baseURL: "https://banckend-applications.herokuapp.com"
});

export default api;