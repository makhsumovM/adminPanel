import { TextField } from '@mui/material'
import { Modal } from 'antd'
import React from 'react'
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryName, setImageCategories } from '../../../reducers/adminSlice';
import { ForAddNewCategories } from '../../../api/apiAsyncThunk';

const ForAddingCategoriesModal = ({openAddModal,handleCloseAddModal}) => {
    const dispatch = useDispatch();
    const {categoriesImage,categoiresName} = useSelector((state)=>state.admin)
    const handleOkClick =()=>{
        dispatch(ForAddNewCategories({categoriesImage,categoiresName}))
    }

  return (
    <>
        <Modal title="ADD Categosies" open={openAddModal} onClose={handleCloseAddModal} onCancel={handleCloseAddModal} onOk={handleOkClick}>
            <div className='flex flex-col gap-[20px] py-[50px]'>
                <div className='text-center'>
                    <TextField size='small' value={categoiresName} sx={{width:"300px"}} label="CategoryName" onChange={(e)=>{dispatch(setCategoryName(e.target.value))}}/>
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

export default ForAddingCategoriesModal