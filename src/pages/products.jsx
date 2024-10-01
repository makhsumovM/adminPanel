import React, { useEffect, useId } from 'react'
import { GetToken } from '../utils/token'
import { useDispatch, useSelector } from 'react-redux'
import {  ForDeleteProductByID, ForSearchProductByName, GetMyProducts } from '../api/apiAsyncThunk'
import { Box, Button, Checkbox, IconButton, InputAdornment, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckBox, Delete, Edit, EditNotifications, Search } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'

const Products = () => {

  const {myProducts} = useSelector((state)=>state.admin)
  const dispatch = useDispatch()
  const token = GetToken()
  useEffect(()=>{
    if(token){
      dispatch(GetMyProducts(token.sid))
    }
  },[dispatch])
  console.log(token.sid,"ID")
  console.log(myProducts,"My Products")
  const navigate = useNavigate();
  const handleEditClick = (id)=>{
    navigate(`/layout/${id}`)
  }
  return (
    <div className='p-[20px]'>
       <h1 className='flex justify-between items-center text-[32px]'>Orders <Link to={'/layout/newProduct'}><span><Button variant='contained'>+Add order</Button></span></Link></h1>
      <div className='py-[20px] flex justify-between items-center'>
        <div className='flex items-center gap-[20px]'>
          <div>
            <TextField label="Search" size=''  onChange={(e)=>dispatch(ForSearchProductByName(e.target.value))} slotProps={{input:{endAdornment:(<InputAdornment position='end'><Search/></InputAdornment>)}}}/>
          </div>
        </div>
        <div>
          <Button><Edit/></Button>
          <Button><Delete/></Button>
        </div>
      </div>
      <div>
          <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><Checkbox/>Products</TableCell>
                    <TableCell>Invertory</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {myProducts?.map((el)=>{

                    return(
                    <TableRow key={el.id}>
                      <TableCell>
                      <div className='flex items-center gap-[px] '><Checkbox/> 
                        <div className='flex items-center gap-[10px]'>
                          <img className='max-w-[59px] max-h-[48px] object-cover ' src={import.meta.env.VITE_APP_IMAGE_URL+el.image} alt="" />
                          <Typography variant='h6' component="p">{el.productName}</Typography>
                        </div>
                      </div>
                      </TableCell>
                      <TableCell><Typography variant='h6' component="p">{el.quantity}</Typography></TableCell>
                      <TableCell><Typography variant='h6' component="p">{el.price}$</Typography></TableCell>
                      <TableCell>
                        <Box>
                          <IconButton onClick={()=>handleEditClick(el.id)}><EditIcon color='secondary'/></IconButton>
                          <IconButton onClick={()=>dispatch(ForDeleteProductByID(el.id))}><DeleteIcon color='error'/></IconButton>
                          </Box>
                          </TableCell>
                    </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
          </TableContainer>
        </div>
    </div>
  )
}

export default Products