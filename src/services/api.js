import axios from "axios";

const urlBack = "http://codelabs.dev.br:8080"

const api = axios.create({
    baseURL: urlBack,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;