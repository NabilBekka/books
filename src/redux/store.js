import {bookReducer} from "./books/bookSlice";
import {searchBookReducer} from "./searchBooks/searchBooksSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        library: bookReducer,
        googleBooks : searchBookReducer
    }
})

export default store;