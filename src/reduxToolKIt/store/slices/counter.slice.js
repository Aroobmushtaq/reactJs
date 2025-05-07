import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 6,
        userName: "Aroob",
    },
    reducers: {
        increment: (state) => {
            console.log("increment action called");
            
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        setUserName: (state, action) => {
            console.log("setUserName action called", action.payload);
            state.userName = action.payload;
        },
    }
})
export const{increment, decrement, setUserName}=counterSlice.actions;