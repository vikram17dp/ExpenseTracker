import axios from "axios";


export const axiosClient = axios.create({
    baseURL : 'https://expensetracker-unfx.onrender.com'
})
