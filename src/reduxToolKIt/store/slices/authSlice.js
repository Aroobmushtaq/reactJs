
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";

export const signup = createAsyncThunk(
    "auth/signup",
    async (userData, { rejectWithValue }) => {
        try {
            console.log("userDat in action", userData);
            
            const response = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
            await setDoc(doc(collection( db,"users"), response.user.uid), {
                fullName: userData.userName,
                email: userData.email,
                userId: response.user.uid,
                createdAt: new Date(),
            });
            const user = response.user;
            return user;
        } catch (error) {
            console.log("error in signup action", error);
            return rejectWithValue(error.message);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await signInWithEmailAndPassword(auth, userData.email, userData.password)
            const user = response.user;
            return user;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: true,
        isLoading: false,
        error: null,
    },
   extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});
