import {
    Button,
    IconButton,
    MenuItem,
    Paper,
    Select,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import FileBase64 from 'react-file-base64';
  import { Link, useNavigate, useParams } from "react-router-dom";
  import ReactQuill from "react-quill";
  import "react-quill/dist/quill.snow.css";
  import { Avatar } from "antd";
  import { Construction, Delete } from "@mui/icons-material";
  import { CirclePicker } from "react-color";
  import BackupIcon from "@mui/icons-material/Backup";
  import { useDispatch, useSelector } from "react-redux";
  import { ForEditProduct, ForPostProduct, GetBrands, GetCategories, GetColors, GetProductByid, GetSubCategories } from "../api/apiAsyncThunk";
  import { forDeleteImages, setBrandID, setCategoryID, setCode, setColorID, setDescription, setDiscount, setEditCode, setEditDescription, setEditHasDiscount, setEditPrice, setEditProductName, setEditQuantity, setImages, setPrice, setProductName, setQuantity, setSubCategoriesID } from "../reducers/adminSlice";
  
  const ForEdditProductById = () => {
    const { colors,categories,brands, EditProductName,EditCode, EditDescription,EditPrice,EditHasDiscount,EditQuantity,selectedCategoryID,selectedBrandID,selectedColorID,subCategories,selectedSubcategoryID,images,ProductByID,fornavigate} = useSelector((state) => state.admin);
    const dispatch = useDispatch();
   const {id} = useParams();
    useEffect(() => {
      dispatch(GetColors());
      dispatch(GetCategories())
      dispatch(GetBrands())
      dispatch(GetSubCategories())
      dispatch(GetProductByid(id))
    }, [dispatch,images,fornavigate]);
  
    const navigate = useNavigate()
    const handleShowImage = (e)=>{
      dispatch(setImages(e))
    }
  
    const handleSubmit  = ()=>{
      dispatch(ForEditProduct({id,selectedBrandID,EditPrice,EditProductName,EditCode,EditHasDiscount,EditQuantity,selectedColorID,selectedSubcategoryID,images,EditDescription}))
      if(fornavigate?.statusCode ===200){
        navigate("/layout/products")
      }
    }
  
  
    return (
      <div className="p-[20px] ">
        <h1 className="flex justify-between items-center text-[32px]">
          Products / Add new
          <span className="flex gap-[20px] items-center">
            <Link to={"/layout/products"}>
              <Button variant="outlined">Cancel</Button>
            </Link>
            <span>
              <Button variant="contained" onClick={handleSubmit}>Save</Button>
            </span>
          </span>
        </h1>
  
        <form action="" className="flex w-[100%] justify-between py-[20px]" >
          <div className="w-[70%] ">
            <div className="flex gap-[20px] py-[20px] w-[100%] ">
              <TextField label="Product Name" size="" sx={{ width: "70%" }} value={EditProductName}  onChange={(e)=>dispatch(setEditProductName(e.target.value))}/>
              <TextField label="Code" size="" sx={{ width: "100px" }} value={EditCode} onChange={(e)=>dispatch(setEditCode(e.target.value))} />
            </div>
  
            <div className="mb-[50px]">
              <ReactQuill
                theme="snow"
                placeholder="description "
                style={{ padding: "20px,0px", height: "150px", width: "88%" }}
                value={EditDescription}
                onChange={(e)=>dispatch(setEditDescription(e))}
              />
            </div>
  
            <div className="flex items-center justify-between w-[88%]">
              
  
            <Select value={selectedSubcategoryID} onChange={(e)=>dispatch(setSubCategoriesID(e.target.value))} displayEmpty sx={{minWidth:200}}>
                <MenuItem value="">Подкатегория</MenuItem>
              {subCategories.slice(0,4).map((el)=>{
                  return <MenuItem value={el.id}>{el.subCategoryName}</MenuItem>
                })}
              </Select>  
              <Select value={selectedBrandID} onChange={(e)=>dispatch(setBrandID(e.target.value))} displayEmpty sx={{minWidth:200}}>
              <MenuItem value="">Бренд</MenuItem>
              {brands.slice(0,4).map((el)=>{
                  return <MenuItem value={el.id}>{el.brandName}</MenuItem>
                })}
            </Select>
            </div>
  
            <div className="flex justify-between w-[88%] py-[20px]">
              <TextField
                label="Price"
                type="number"
                size=""
                sx={{minWidth:100}}
                value={EditPrice}
                onChange={(e)=>dispatch(setEditPrice(e.target.value))}
              />
              <TextField  type="number" sx={{ width: "20%" }} value={EditQuantity} label="Quantity" onChange={(e)=>dispatch(setEditQuantity(e.target.value))} />
              <Select
                label=""
                size=""
                sx={{minWidth:100}}
                value={EditHasDiscount}
                onChange={(e)=>dispatch(setEditHasDiscount(e.target.value))}
              >
                <MenuItem value={true}>Имеется</MenuItem>
                <MenuItem value={false}>Не Имеется</MenuItem>
              </Select>
            </div>
          </div>  
          <div className="w-[30%] flex justify-center flex-col gap-[20px]">
            <div>
              <div className="p-[20px] border-[3px]">
                <h1 className="font-bold text-[24px] pb-[20px]">Colour:</h1>
                <div className="flex flex-wrap justify-start gap-[10px]">
                  {colors.map((el) => (
                    <label className="radio-label" key={el.id}>
                      <input
                        type="radio"
                        name="color"
                        value={el.id}
                        className="hidden"
                        checked={selectedColorID === el.id}
                        onChange={()=>dispatch(setColorID(el.id))}
                      />
                      <span
                        className={`w-8 h-8 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center ${
                          selectedColorID === el.id ? "ring-2 ring-blue-500" : ""
                        }`} 
                        style={{ backgroundColor: `${el.colorName.toLowerCase()}` }}
                      ></span>
                    </label>
                  ))}
                </div>
              </div>
  
              {/* Загрузка изображений */}
              <div className="py-[20px]">
                <div className="text-center p-[20px] border">
                  <p>
                    <IconButton>
                      <BackupIcon fontSize="large" />
                    </IconButton>
                  </p>
                  <h1>
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer font-bold underline"
                    >
                      Click to upload
                    </label>{" "}
                    or drag and drop
                  </h1>
                  <p className="text-[#6C737F]">
                    (SVG, JPG, PNG, or gif maximum 900x400)
                  </p>
                </div>
                  <FileBase64 multiple={true} onDone={handleShowImage}/>
  
                {/* Список загруженных изображений */}
                <div className="py-[20px]">
                  <TableContainer component={Paper}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>File name</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {images.length > 0 ? (
                        images.map((image, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Avatar src={image.base64} size="large" />
                            </TableCell>
                            <TableCell>{image.name}</TableCell>
                            <TableCell>
                              <IconButton onClick={()=>dispatch(forDeleteImages(index))} >
                                <Delete />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell>
                            <p>No images uploaded yet.</p>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default ForEdditProductById;
  