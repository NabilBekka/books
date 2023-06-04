import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    books: [],
    error: ''
};

export const fetchBooks = createAsyncThunk('searchBooks/fetchBooks',title => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20`)
            .then(res => res.data.items);
});

const searchBooksSlice = createSlice({
    name: 'searchBooks',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchBooks.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchBooks.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.books = payload;
            state.error= '';
        });
        builder.addCase(fetchBooks.rejected, (state, {error}) => {
            state.isLoading = false;
            state.books = [];
            state.error= error.message;
        })
    }
});

export const searchBookReducer = searchBooksSlice.reducer;