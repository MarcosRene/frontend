import axios from "axios";

const api = axios.create({
    baseURL: "https://onmistack-backend.herokuapp.com"
});

export default api;