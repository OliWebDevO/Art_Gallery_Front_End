import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "http://localhost:8800/api/",
    // baseURL: "https://85.31.237.248:8080/api/",
    // baseURL: "https://olivervdb.com/api/",
    withCredentials: true,
})