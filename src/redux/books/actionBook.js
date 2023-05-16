import { ADD_BOOK, DELETE_ALL_BOOK, DELETE_BOOK } from "./type";

export const addBook = (payload) => {
    return {
        type: ADD_BOOK,
        payload
    }
}

export const deleteBook = (payload) => {
    return {
        type: DELETE_BOOK,
        payload
    }
}

export const deleteAllBooks = () => {
    return {
        type: DELETE_ALL_BOOK 
    }
}