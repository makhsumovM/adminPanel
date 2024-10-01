import axios from "axios";


export const axiosRequest= axios.create({
    baseURL:import.meta.env.VITE_APP_API
})

axiosRequest.interceptors.request.use(
    config=>{
        const Token = localStorage.getItem('AdminToken')
        if(Token){
            config.headers.Authorization = `Bearer ${Token}`
        }
        return config
    },
    error =>{
        return Promise.reject(error)
    }
)