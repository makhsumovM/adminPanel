import { Delete, Edit, Search } from '@mui/icons-material'
import { Button, InputAdornment, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ForSearchProductByName, GetProducts } from '../api/apiAsyncThunk'

const Orders = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state)=>state.admin)
  useEffect(()=>{
    dispatch(GetProducts())
  },[dispatch])
  console.log(products)
  return (
    <div className='p-[20px]'>
      <h1 className='flex justify-between items-center text-[32px]'>Orders <span><Button variant='contained'>+Add order</Button></span></h1>
      <div className='py-[20px] flex justify-between items-center'>
        <div className='flex items-center gap-[20px]'>
          <div>
            <TextField label="Search" size='' onChange={(e)=>dispatch(ForSearchProductByName(e.target.value))} slotProps={{input:{endAdornment:(<InputAdornment position='end'><Search/></InputAdornment>)}}}/>
          </div>
        </div>
        <div>
          <Button><Edit/></Button>
          <Button><Delete/></Button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Price
              </TableCell>
              <TableCell>
                Quantity
              </TableCell>
              <TableCell>
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((el)=>{
              return (
                <TableRow key={el.id} sx={{"&:hover":{backgroundColor: '#f5f5f5'}}}>
                  <TableCell>{el.id}</TableCell>
                  <TableCell>{el.productName}</TableCell>
                  <TableCell><span className='text-green-600 font-bold'>$</span>{el.price}$</TableCell>
                  <TableCell>{el.quantity}</TableCell>
                  <TableCell><span className='text-green-600 font-bold'>$</span>{el.price*el.quantity}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default Orders