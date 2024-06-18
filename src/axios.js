import axios from "axios";

export const makeRequest = axios.create({
    // baseURL: "http://localhost:8080/api/",
    baseURL: "https://olivervdb.com/api/",
    withCredentials: true,
})