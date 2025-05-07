import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter.slice'
import { productSlice } from './slices/product.slice'
export const store = configureStore({
  reducer: {
    counterSlice:counterSlice.reducer,
    productSlice:productSlice.reducer
  },
})