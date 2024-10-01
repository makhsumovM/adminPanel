import { jwtDecode } from "jwt-decode"


export function saveToken(token){
    localStorage.setItem('AdminToken', token)
}

export const GetToken =()=>{
    try {
        const token = localStorage.getItem('AdminToken')
        if(token){
            return jwtDecode(token)
        }
        return null
    } catch (error) {
        console.error(error,"error getting token")
        return null
    }
}

export const RemoveToken = ()=>{
    localStorage.removeItem('AdminToken')
}