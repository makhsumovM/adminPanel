import { Button } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Other = () => {
  return (
    <div className='p-[20px]'>
      <h1 className='flex justify-between'>
        <span className='flex gap-[10px]'>
          <Link to={'/layout/other'}><Button variant='outlined'>Categories</Button></Link>
          <Link to={'brands'}><Button variant='outlined'>Brands</Button></Link>
        </span>
      </h1>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Other