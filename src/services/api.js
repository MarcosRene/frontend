import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-applications.herokuapp.com/"
});

export default api;