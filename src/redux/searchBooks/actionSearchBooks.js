import axios from "axios"
import { LOAD_BOOKS, LOAD_BOOKS_ERROR, LOAD_BOOKS_SUCCESS } from "./type"

const loadBooks = () => {
    return {
        type: LOAD_BOOKS
    }
}

const loadBooksSuccess = (data) => {
    return {
        type: LOAD_BOOKS_SUCCESS,
        payload: data
    }
}

const loadBooksError = (error) => {
    return {
        type: LOAD_BOOKS_ERROR,
        payload: error
    }
}

const callApi = (title) => {
    return dispatch => {
        dispatch(loadBooks());
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20`)
            .then(res => dispatch(loadBooksSuccess(res.data.items)))
            .catch(err => dispatch(loadBooksError(err.message)));
    };
}

export default callApi;