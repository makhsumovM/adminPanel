import { createSlice } from "@reduxjs/toolkit"
import {  ForEditProduct, ForGetCategories, ForPostProduct, ForSearchProductByName, ForUpdateBrand, GetBrands, GetBrandsById, GetCategories, GetColors, GetMyProducts, GetProductByid, GetProducts, GetSubCategories } from "../api/apiAsyncThunk"
 

const initialState = {
    products:[],
    myProducts:null,
    colors:[],
    categories:[],
    brands :[],
    subCategories:[],
    images:[],
    productName :"",
    code :"",
    descripdion:"",
    price :"",
    discount:"",
    quantity:"",
    selectedCategoryID:"",
    selectedBrandID:"",
    selectedColorID:"",
    selectedSubcategoryID:"",
    ProductByID:{},
    EditProductName :"",
    EditDescription:"",
    EditPrice:"",
    EditHasDiscount:"",
    EditQuantity:"",
    EditCode:"",
    fornavigate :null,
    categoriesImage :[],
    categoiresName:"",
    categoryById:{},
    EditCategoryName:"",
    IdCategory:"",
    ForBrandName:"",
    ForEditBrandName:"",
    IdBrand:"",


}

export const adminReducer  = createSlice({
    name: 'admin',
    initialState,
    reducers:{

    },
    reducers:{
        setProductName:(state,action)=>{
            state.productName = action.payload
        },
        setCode:(state,action)=>{
            state.code = action.payload
        },
        setDescription:(state,action)=>{
            state.descripdion = action.payload
        },
        setPrice:(state,action)=>{
            state.price = action.payload
        },
        setDiscount:(state,action)=>{
            state.discount = action.payload
        },
        setQuantity:(state,action)=>{
            state.quantity = action.payload
        },
        setCategoryID:(state,action)=>{
            state.selectedCategoryID = action.payload
        },
        setBrandID:(state,action)=>{
            state.selectedBrandID = action.payload
        },
        setColorID:(state,action)=>{
            state.selectedColorID = action.payload
        },
        
        setSubCategoriesID:(state,action)=>{
            state.selectedSubcategoryID = action.payload
        },
            setImages:(state,action)=>{
                console.log(action.payload,"fileBase64")
                state.images = action.payload
            },
            forDeleteImages:(state,action)=>{
                state.images = state.images.filter((_,index)=>{
                    return index!== action.payload
                })
                console.log(state.images,"filteredImages")
            },
            setEditProductName:(state,action)=>{
                state.EditProductName = action.payload
            },
            setEditDescription:(state,action)=>{
                state.EditDescription = action.payload
            },
            setEditPrice:(state,action)=>{
                state.EditPrice = action.payload
            },
            setEditHasDiscount:(state,action)=>{
                state.EditHasDiscount = action.payload
            },
            setEditQuantity:(state,action)=>{
                state.EditQuantity = action.payload
            },
            setEditCode:(state,action)=>{
                state.EditCode = action.payload
            },
            setImageCategories:(state,action)=>{
                console.log(action.payload,"imageCategory")
                state.categoriesImage = action.payload
            },
            
                setCategoryName:(state,action)=>{
                    state.categoiresName = action.payload
                },
                setEditCategoryName:(state,action)=>{
                    state.EditCategoryName = action.payload
                },
                forGetIdCategory:(state,action)=>{
                    state.IdCategory = action.payload
                },
                
                setForBrandName:(state,action)=>{
                    state.ForBrandName = action.payload
                }

    },
    extraReducers:(builder)=>{
        builder.addCase(GetProducts.fulfilled,(state,action)=>{
            state.products = action.payload
        })

        .addCase(GetMyProducts.fulfilled,(state,action)=>{
            console.log(action.payload,"myProducts")
            state.myProducts = action.payload
        })
        .addCase(GetColors.fulfilled,(state,actions)=>{
            state.colors = actions.payload
        })
        .addCase(GetCategories.fulfilled,(state,actions)=>{
            state.categories = actions.payload
        })
        .addCase(GetBrands.fulfilled,(state,actions)=>{
            state.brands = actions.payload
        })
        .addCase(GetSubCategories.fulfilled,(state,actions)=>{
            
            state.subCategories = actions.payload
        })
        .addCase(GetProductByid.fulfilled,(state,actions)=>{
            state.ProductByID = actions.payload
            state.EditProductName = actions.payload.productName
            state.EditDescription = actions.payload.description
            state.EditPrice = actions.payload.price
            state.EditHasDiscount = actions.payload.hasDiscount
            state.EditQuantity = actions.payload.quantity
            state.EditCode = actions.payload.code
        })
        .addCase(ForEditProduct.fulfilled,(state,actions)=>{
            
            state.fornavigate = actions.payload
        })
        .addCase(ForGetCategories.fulfilled,(state,actions)=>{
            console.log(actions.payload.id,"ooooooo")
            state.EditCategoryName = actions.payload.categoryName
            state.IdCategory = actions.payload.id
        })
        .addCase(GetBrandsById.fulfilled,(state,actions)=>{
            console.log(actions.payload)
        })
        .addCase(ForUpdateBrand.fulfilled,(state,actions)=>{
            console.log(actions.payload)
            state.ForEditBrandName = actions.payload.brandName
            state.IdBrand = actions.payload.id

        })
        .addCase(ForPostProduct.fulfilled,(state,actions)=>{
            console.log(actions.payload,"alooooooo")
            if(actions.payload.statusCode == 200){
                state.productName = ""
                state.code = ""
                state.descripdion = ""
                state.price = ""
                state.discount = ""
                state.quantity = ""
                state.selectedCategoryID = ""
                state.selectedBrandID = ""
                state.selectedColorID = ""
                state.selectedSubcategoryID = ""
                state.images = []
                state.EditProductName = ""
                state.EditDescription = ""
                state.EditPrice = ""
                state.EditHasDiscount = ""
                state.EditQuantity = ""
                state.EditCode = ""
                state.categoriesImage = []
                state.categoiresName = ""
                state.EditCategoryName = ""
                state.IdCategory = ""
                state.ForBrandName = ""
            }
            state.fornavigate = actions.payload.statusCode

        })
        .addCase(ForPostProduct.rejected,(state,action)=>{
            console.log(action.error,"rees")
        })
        .addCase(ForSearchProductByName.fulfilled,(state,actions)=>{
            state.myProducts = actions.payload
            state.products = actions.payload
        })
        

        
    }
})

export const {setProductName,  setCode, setDescription,setPrice, setDiscount,setQuantity,setCategoryID,setBrandID,setColorID,setSubCategoriesID,setImages,forDeleteImages,setEditProductName,  setEditDescription ,setEditPrice,setEditHasDiscount ,setEditQuantity,setEditCode,setImageCategories,setCategoryName,setEditCategoryName,forGetIdCategory,setForBrandName} = adminReducer.actions
export default adminReducer .reducer