import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { axiosRequest } from '../utils/axiosRequest';
import { useNavigate } from 'react-router-dom';
import { GetToken, saveToken } from '../utils/token';
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { GetMyProducts } from '../api/apiAsyncThunk';
const ForLogin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
 async function handleLoginClick(e){
    e.preventDefault();
    const user = {
        userName:e.target["userName"].value,
        password: e.target["password"].value,
    }
    console.log(user)
    try {
        const {data} = await axiosRequest.post('/Account/login',user)
        if(data.statusCode == 200){
            console.log("Success")
            saveToken(data.data)
            GetToken(data.data)
            navigate("/layout")
        }
    } catch (error) {
        console.error(error)
    }
 }

 const [showPassword, setShowPassword] = useState(false)

 const handleClickShowPassword = () => {
   setShowPassword(!showPassword)
 }

  return (
    <div className='flex items-center h-[100vh]'>
        <div className='w-[50%] bg-gradient-to-b from-cyan-800 to-blue-950 h-[100%] flex flex-col items-center justify-center '>
            <h1 className='text-white text-[32px]'>Welcome to admin panel</h1>
            <div className='flex items-center gap-[20px]'>
                <span><img src={logo1} alt="" /></span>
                <span><img src={logo2} alt="" /></span>
            </div>
        </div>
        <div className='w-[50%] flex items-center justify-center'>
            <div className='w-[60%]'>
                <h2 className='py-[20px] text-[24px] font-bold'>Log In</h2>
                <form action="" onSubmit={handleLoginClick} className='flex flex-col'>
                        <div className=''>
                            <TextField label='Name' variant='outlined' name='userName' sx={{width:"100%"}}/>
                        </div>
                        <div className='py-[20px]'>
                            <TextField label='password' name='password' type={showPassword?'text':'password'} sx={{width:"100%"}} slotProps={{input:{endAdornment:(<InputAdornment position='end'><IconButton onClick={handleClickShowPassword}>{showPassword?<VisibilityOff/>:<Visibility/>}</IconButton></InputAdornment>)}}}/>
                        </div>
                    <Button variant='contained' sx={{ padding:"15px"}} type='submit'>Login</Button>
                </form>
            </div>
        </div>


    </div>
  )
}

export default ForLogin


