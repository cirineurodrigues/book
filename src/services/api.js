import axios from "axios"

const token = localStorage.getItem("authToken")

export const api = axios.create({
    baseURL: "https://books.ioasys.com.br/api/v1/",
    headers: {
        Authorization: `Bearer ${token}`
    }
})
