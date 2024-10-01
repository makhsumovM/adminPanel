import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForDeleteCategoty, ForGetCategories, GetCategories } from "../api/apiAsyncThunk";
import { IconButton, TextField } from "@mui/material";
import { Button } from "antd";
import { Delete, Edit } from "@mui/icons-material";
import ForAddingCategoriesModal from "../components/forOtherModals/categoriesModal/forAddingCategories";
import ForEditCategoriesModal from "../components/forOtherModals/categoriesModal/forEditCategories";
import { forGetIdCategory } from "../reducers/adminSlice";

const OtherCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(GetCategories());
  }, []);
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };
  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };
  ///forEditCatagory
  const [openEditModal, setOpenEditModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const handleOpenEditModal = (id) => {
    console.log(id)
    setOpenEditModal(true);
    dispatch(ForGetCategories(id))
    dispatch(forGetIdCategory(id))

  };
  const handleCloseEditModal = () => {
    setOpenEditModal(false);

  };
  return (
    <div className="py-[20px]">
      <div className="flex justify-between items-center mb-4">
        <Button variant="filled" onClick={handleOpenAddModal} className="p-[20px]" type="primary">
          +ADD
        </Button>
        <ForAddingCategoriesModal
          openAddModal={openAddModal}
          handleCloseAddModal={handleCloseAddModal}
        />
      </div>
      <div className="flex flex-wrap gap-4 justify-start">
        {categories.map((ellement) => (
          <div
            key={ellement.id}
            className="group  border-[2px] border-[#91919170] w-[170px] h-[145px] flex flex-col justify-evenly items-center relative"
          >
            <img
              className="w-[50px] h-[50px] rounded"
              src={import.meta.env.VITE_APP_IMAGE_URL + ellement?.categoryImage}
              alt=""
            />

            <h1 className="text-[16px] text-center font-[100] ">
              {ellement?.categoryName}
            </h1>
            <div className="absolute top-1 right-2 flex flex-col">
                <IconButton onClick={()=>handleOpenEditModal(ellement.id)}>
                    <Edit color="secondary"/>
                </IconButton>
                <IconButton onClick={()=>dispatch(ForDeleteCategoty(ellement.id))}>
                  <Delete color="error"/>
                </IconButton>
            </div>
          </div>
        ))}
      </div>
      <ForEditCategoriesModal openEditModal={openEditModal} handleCloseEditModal={handleCloseEditModal}/>
    </div>
  );
};

export default OtherCategories;
