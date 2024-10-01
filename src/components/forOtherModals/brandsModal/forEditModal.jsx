import { TextField } from '@mui/material'
import { Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ForUpdateBrand } from '../../../api/apiAsyncThunk'

const ForEditBrandNameModal = ({openEditModal,handleCloseEditModal}) => {
    const dispatch = useDispatch();
    const {ForEditBrandName,IdBrand} = useSelector((state)=>state.admin)
    const hahdleOkClick = ()=>{
        dispatch(ForUpdateBrand({IdBrand,ForEditBrandName}))
    }
  return (
    <>
    <Modal title="Eddit BrandName" open={openEditModal} onCancel={handleCloseEditModal} onClose={handleCloseEditModal}>
        <TextField size='small'  sx={{width:"300px"}} label="Brand Name" value={ForEditBrandName} onChange={(e)=>dispatch(setForBrandName(e.target.value))}/>
    </Modal>
    </>
  )
}

export default ForEditBrandNameModal