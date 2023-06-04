import { createSlice } from "@reduxjs/toolkit";

const initialBooks = JSON.parse(localStorage.getItem('books'));

const initialState = initialBooks !== null ? initialBooks : {
    books:  [] 
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, {payload}) => {
            state.books= [...state.books, payload];
            localStorage.setItem('books', JSON.stringify(state));
        },
        deleteBook: (state, {payload}) => {
            state.books= state.books.filter(book => book.id !== payload.id);
            localStorage.setItem('books', JSON.stringify(state));
        },
        deleteAllBooks: state => {
            state.books= [];
            localStorage.removeItem('books');
        }
    }
});

export const bookReducer = bookSlice.reducer;
export const {addBook, deleteBook, deleteAllBooks} = bookSlice.actions;