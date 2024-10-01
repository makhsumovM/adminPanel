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
import { Link, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Avatar } from "antd";
import { Construction, Delete } from "@mui/icons-material";
import { CirclePicker } from "react-color";
import BackupIcon from "@mui/icons-material/Backup";
import { useDispatch, useSelector } from "react-redux";
import { ForPostProduct, GetBrands, GetCategories, GetColors, GetSubCategories } from "../api/apiAsyncThunk";
import { forDeleteImages, setBrandID, setCategoryID, setCode, setColorID, setDescription, setDiscount, setImages, setPrice, setProductName, setQuantity, setSubCategoriesID } from "../reducers/adminSlice";

const ForAddinProduct = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const { colors,categories,brands, productName,code, descripdion,price,discount,quantity,selectedCategoryID,selectedBrandID,selectedColorID,subCategories,selectedSubcategoryID,images,fornavigate} = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetColors());
    dispatch(GetCategories())
    dispatch(GetBrands())
    dispatch(GetSubCategories())
  }, [dispatch,images,productName,code,]);

  console.log(selectedColorID)



  const handleShowImage = (e)=>{
    dispatch(setImages(e))
  }
  const navigate = useNavigate()

  const handleSubmit  = ()=>{
    dispatch(ForPostProduct({navigate,selectedBrandID,price,productName,code,discount,quantity,selectedColorID,selectedSubcategoryID,images,descripdion}))

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
            <TextField label="Product Name" size="" sx={{ width: "70%" }} value={productName}  onChange={(e)=>dispatch(setProductName(e.target.value))}/>
            <TextField label="Code" size="" sx={{ width: "100px" }} value={code} onChange={(e)=>dispatch(setCode(e.target.value))} />
          </div>
          
          <div className="py-[10px]">
          <TextField 
              value={descripdion}
              onChange={(e)=>dispatch(setDescription(e.target.value))}
              sx={{width:"70%"}}
              multiline
              rows={4}
              label="Description"
          />
          </div>

          <div className="flex items-center gap-[20px] py-[20px]">
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

          <div className="flex gap-[20px]">
            <TextField
              label="Price"
              type="number"
              sx={{ width: "20%" }}
              value={price}
              onChange={(e)=>dispatch(setPrice(e.target.value))}
            />
            <TextField  type="number" sx={{ width: "20%" }} value={quantity} onChange={(e)=>dispatch(setQuantity(e.target.value))} label="Quantity" />
            <Select
              label="HasDiscount"
              sx={{minWidth:200}}
              value={discount}
              onChange={(e)=>dispatch(setDiscount(e.target.value))}
              displayEmpty
            >
              <MenuItem value="">Скидка</MenuItem>
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

export default ForAddinProduct;
