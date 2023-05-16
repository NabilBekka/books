import { LOAD_BOOKS, LOAD_BOOKS_ERROR, LOAD_BOOKS_SUCCESS } from "./type";

const initialData = {
    isLoading: false,
    books: [],
    error: null
};

const searchBookReducer = (state=initialData , action) => {
    const {type, payload} = action;
    switch (type) {
        case LOAD_BOOKS:
            return {
                isLoading: true,
                books: [],
                error: null
            };
        case LOAD_BOOKS_SUCCESS:
            return {
                isLoading: false,
                error: null,
                books: payload ? payload : []
            };
        case LOAD_BOOKS_ERROR:
            return {
                isLoading: false,
                books: [],
                error: payload
            }
        default:
            return state;
    }
}

export default searchBookReducer;