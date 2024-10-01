import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FileBase64 from 'react-file-base64';
import { setEditCategoryName, setImageCategories } from '../../../reducers/adminSlice';
import { Modal } from 'antd';
import { TextField } from '@mui/material';
import { ForUpdateCategory } from '../../../api/apiAsyncThunk';

const ForEditCategoriesModal = ({openEditModal,handleCloseEditModal}) => {
    const dispatch = useDispatch();
    const {categoriesImage,EditCategoryName,IdCategory} = useSelector((state)=>state.admin)
    const handleOkClick = () =>{
        dispatch(ForUpdateCategory({EditCategoryName,categoriesImage,IdCategory}))
    }

  return (
    <>
        <Modal title="Eddit Categosies"  open={openEditModal} onClose={handleCloseEditModal} onCancel={handleCloseEditModal} onOk={handleOkClick}>
            <div className='flex flex-col gap-[20px] py-[50px]'>
                <div className='text-center'>
                    <TextField size='small'  sx={{width:"300px"}} label="CategoryName" value={EditCategoryName} onChange={(e)=>dispatch(setEditCategoryName(e.target.value))}/>
                </div>
                <div className='border w-fit m-auto p-[20px]'>
                    <div className='text-center'>
                        <FileBase64 multiple={false} onDone={(e)=>dispatch(setImageCategories(e))}/>
                    </div>
                    <div className='py-[20px] flex justify-center'>
                        <img src={categoriesImage.base64} className='w-[250px] object-cover' alt="Choose Image" />
                    </div>
                </div>
            </div>

        </Modal>
    </>
  )
}

export default ForEditCategoriesModal