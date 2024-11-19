import axios from "axios";


export const axiosClient = axios.create({
    baseURL : 'https://expensetracker-4rn9.onrender.com'
})
