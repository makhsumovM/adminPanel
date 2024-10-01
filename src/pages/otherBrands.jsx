import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ForAddNewBrands, ForDeleteBrandsByID, GetBrands, GetBrandsById } from '../api/apiAsyncThunk';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { setForBrandName } from '../reducers/adminSlice';
import ForEditBrandNameModal from '../components/forOtherModals/brandsModal/forEditModal';

const OtherBrands = () => {
    const dispatch = useDispatch();
    const { brands,ForBrandName } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(GetBrands());
    }, [dispatch]);

    const hadleCreateClick = ()=>{
        dispatch(ForAddNewBrands(ForBrandName))
        dispatch(setForBrandName(''))
    }
    const [openEditModal,setOpenEditModal]=useState(false)
    const handleEditClick = (id)=>{
        setOpenEditModal(true)
        dispatch(GetBrandsById(id))
    }
    const handleCloseEditModal = ()=>{
        setOpenEditModal(false)
    }

    return (
        <div  className='flex justify-between py-[20px] items-start'>
            <TableContainer component={Paper} sx={{ width: '40%' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography fontWeight="bold" variant="body1">
                                    Brand Name
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography fontWeight="bold" variant="body1">
                                    Action
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {brands.map((el) => (
                            <TableRow key={el.id}>
                                <TableCell>{el.brandName}</TableCell>
                                <TableCell align="right">
                                    <IconButton color="primary" onClick={()=>handleEditClick(el.id)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={()=>dispatch(ForDeleteBrandsByID(el.id))}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ForEditBrandNameModal openEditModal={openEditModal} handleCloseEditModal={handleCloseEditModal}/>
            
            <div className="w-[40%] border p-[20px] rounded-lg shadow-lg bg-white">
                <div className="text-center py-[10px]">
                    <Typography variant="h5" component="h1" fontWeight="bold">
                        ADD NEW Brand
                    </Typography>
                </div>
                <div className="text-center py-[20px]">
                    <TextField label="Brand name" fullWidth variant="outlined" size="small" value={ForBrandName} onChange={(e)=>dispatch(setForBrandName(e.target.value))} />
                </div>
                <div className="text-end">
                    <Button variant="contained" color="primary" size="large" onClick={hadleCreateClick}>
                        Create
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OtherBrands;
