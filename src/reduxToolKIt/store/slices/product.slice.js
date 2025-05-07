import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const getProduct = createAsyncThunk('product/fatch', async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error("Error to fatch product ", error)
        throw error
    }
})
export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        loadMore: 1,
        error: null
    },
    reducers: {
        setLoadMoreCount: (state) => {
            state.loadMore += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading=false
                state.products = action.payload
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})
export const {setLoadMoreCount}=productSlice.actions