import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../config/firebase";
export const createPost = createAsyncThunk("post/createPost", async (postData, { rejectWithValue }) => {
    try {
        const docRef = await addDoc(collection(db, "posts"), postData);
        return {
            id: docRef.id,
            ...postData,
        };
    } catch (e) {
        console.error("Error adding document: ", e);
        return rejectWithValue("Failed to add post");
    }
});

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "posts"));
            let posts = [];
            querySnapshot.forEach((doc) => {
                posts.push({ id: doc.id, ...doc.data() });
            });
            return posts;
        } catch (e) {
            console.error("Error getting documents: ", e);
        }
    }
);
export const deletePost = createAsyncThunk("post/deletePost", async (postId) => {
    try {
        await deleteDoc(doc(db, "posts", postId));
        return postId;
    }
    catch (e) {
        console.error("Error to find Post: ", e)
    }
})
export const updatePost = createAsyncThunk(
    "posts/updatePost",
    async ({ postId, postData }) => {
        try {
            const docRef = doc(db, "posts", postId);
            await updateDoc(docRef, postData);
            return { id: postId, ...postData };
        } catch (e) {
            console.error("Error updating document: ", e);
        }
    }
);
export const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {  // Check if payload is not undefined
                    state.posts = [action.payload, ...state.posts];
                }
                state.error = null;
            })

            .addCase(createPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
                state.error = null;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deletePost.pending, (state) => {
                state.loading = true;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = state.posts.filter((post) => post.id !== action.payload);
                state.error = null;
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updatePost.pending, (state) => {
                state.loading = true;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = false;
                console.log("action.payload.id", action);

                state.posts = state.posts.map((post) =>
                    post.id === action.payload.id ? action.payload : post
                );
                state.error = null;
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})