import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
import { GetToken } from "../utils/token";
import toast from "react-hot-toast";


export const GetProducts = createAsyncThunk('admin/GetProducts',async()=>{
    try {
        const {data} = await axiosRequest.get("/Product/get-products")
        return data.data.products
    } catch (error) {
        console.error(error);
    }
})

export const GetMyProducts = createAsyncThunk('admin/GetMyProducts',async(id)=>{
    console.log(id)
    try {
        const {data} = await axiosRequest(`/Product/get-products?UserId=${id}`)
        console.log(data.data,"siioo")
        return data.data.products
    } catch (error) {
        console.error(error);
    }
})

export const GetColors = createAsyncThunk('admin/GetColors',async()=>{
    try {
        const {data} = await axiosRequest.get("/Color/get-colors")
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const GetCategories = createAsyncThunk('admin/GetCategories',async()=>{
    try {
        const {data} = await axiosRequest.get("/Category/get-categories")
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const GetBrands = createAsyncThunk('admin/GetBrands',async()=>{
    try {
        const {data} = await axiosRequest.get("/Brand/get-brands")
        return data.data
    } catch (error) {
        console.error(error);
    }
}
)

export const GetSubCategories = createAsyncThunk('admin/GetSubCategories',async()=>{
    try {
        const {data} = await axiosRequest.get('/SubCategory/get-sub-category')
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const ForPostProduct = createAsyncThunk('admin/ForPostProduct',async(products,{dispatch})=>{
    console.log(products)
    const formdata = new FormData();
    const files = products.images
    if(files){
        for(let i = 0; i<files.length; i++){
            console.log(files[i].file)
            formdata.append('Images', files[i].file)
        }
        formdata.append('BrandId', products.selectedBrandID)
        formdata.append('ColorId', products.selectedColorID)
        formdata.append('SubcategoryId', products.selectedSubcategoryID)
        formdata.append('ProductName', products.productName)
        formdata.append('Code', products.code)
        formdata.append('Price', products.price)
        formdata.append('Quantity', products.quantity)
        formdata.append('HasDiscount', products.discount)
        formdata.append('Description', products.descripdion)

    }
    try {
        const {data} = await axiosRequest.post("/Product/add-product",formdata)
        console.log(data,"aloooo")
        dispatch(GetProducts())
        if(data.statusCode ===200){
            products.navigate('/layout/products')
            toast.success('success')
        }

        return data
    } catch (error) {
        if(error.response.status==400){
            toast.error('This product code already exists')
        }
        toast.error('Please full all the fields')
        console.error(error);
    }
})

export const GetProductByid = createAsyncThunk('admin/GetProductByid',async(id)=>{
    try {
        const {data} = await axiosRequest.get(`/Product/get-product-by-id?id=${id}`)
        console.log(data)
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const ForEditProduct = createAsyncThunk('admin/ForEditProduct',async(params,{dispatch})=>{
    console.log(params)
    try {
        const {data} = await axiosRequest.put(`/Product/update-product?Id=${params.id}&BrandId=${params.selectedBrandID}&ColorId=${params.selectedColorID}&ProductName=${params.EditProductName}&Description=${params.EditDescription}&Quantity=${params.EditQuantity}&Code=${params.EditCode}&Price=${params.EditPrice}&HasDiscount=${params.EditHasDiscount}&SubCategoryId=${params.selectedSubcategoryID}`)
        dispatch(GetProducts())
        return data

    } catch (error) {
        console.log(error);
    }
})

export const ForDeleteProductByID = createAsyncThunk('admin/ForDeleteProductByID',async(id,{dispatch})=>{
    try {
        const {data} = await axiosRequest.delete(`/Product/delete-product?id=${id}`)
        const token = GetToken();
        await dispatch(GetMyProducts(token.sid));
        console.log(data,"aloooUdalit");
        return data;
    } catch (error) {
        console.error(error);
    }
})

export const ForAddNewCategories = createAsyncThunk('admin/ForAddNewCategories',async(params,{dispatch})=>{
    const form = new FormData()
    form.append('CategoryName',params.categoiresName)
    form.append('CategoryImage',params.categoriesImage.file)
    try {
        const {data} = await axiosRequest.post(`/Category/add-category`,form)
        dispatch(GetCategories())
        return data
    } catch (error) {
        console.error(error);
    }
})

export const ForGetCategories = createAsyncThunk('admin/ForGetCategories',async(id)=>{
    try {
        const {data} = await axiosRequest.get(`/Category/get-category-by-id?id=${id}`)
        console.log(data)
        return data.data
    } catch (error) {
        console.error(error);
    }
})

export const ForUpdateCategory = createAsyncThunk('admin/ForUpdateCategory',async(params)=>{
    console.log(params)
    const form = new FormData()
    form.append('Id',params.IdCategory)
    form.append('CategoryName',params.EditCategoryName)
    form.append('CategoryImage',params.categoriesImage.file)
    try {
        const {data} = await axiosRequest.put('/Category/update-category',form)
    } catch (error) {
        console.error(error);
    }
})


export const ForAddNewBrands = createAsyncThunk('admin/ForAddNewBrands',async(name,{dispatch})=>{
    try {
        const {data} = await axiosRequest.post(`/Brand/add-brand?BrandName=${name}`)
        dispatch(GetBrands())
        return data
    } catch (error) {
        console.error(error);
    }
})

export const ForDeleteBrandsByID = createAsyncThunk('admin/ForDeleteBrandsByID',async(id,{dispatch})=>{
    try {
        const {data} = await axiosRequest.delete(`/Brand/delete-brand?id=${id}`)
        dispatch(GetBrands())
        return data
    } catch (error) {
        console.error(error);
    }
})

export const ForUpdateBrand = createAsyncThunk('admin/ForUpdateBrand',async(params)=>{
    try {
        const {data} = axiosRequest.put(`/Brand/update-brand?Id=${params.IdBrand}&BrandName=${params.ForEditBrandName}`)
    } catch (error) {
        console.error(error);
    }
})

export const GetBrandsById = createAsyncThunk('admin/GetBrandsById',async(id)=>{
    try {
        const {data} = await axiosRequest.get(`Brand/get-brand-by-id?id=${id}`)
        console.log(data)
        return data.data
    } catch (error) {
        console.error(error);
    }
})
export const ForSearchProductByName = createAsyncThunk("admin/ForSearchProductByName",async(Name)=>{
    try {
        const {data} = await axiosRequest.get(`/Product/get-products?ProductName=${Name}`)
        return data.data.products
    } catch (error) {
        console.error(error);
    }
})
export const ForDeleteCategoty = createAsyncThunk('admin/ForDeleteCategoty',async(id,{dispatch})=>{
    try {
        const {data} = await axiosRequest.delete(`/Category/delete-category?id=${id}`)
        if(data.statusCode == 200){
            toast.success('Category deleted successfully')
            dispatch(GetCategories())
        }
    } catch (error) {
        console.error(error);
    }
})