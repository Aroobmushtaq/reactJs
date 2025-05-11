import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter.slice'
import { productSlice } from './slices/product.slice'
import { postSlice } from './slices/posts.slice'
export const store = configureStore({
  reducer: {
    counterSlice:counterSlice.reducer,
    productSlice:productSlice.reducer,
    postSlice:postSlice.reducer
  },
})