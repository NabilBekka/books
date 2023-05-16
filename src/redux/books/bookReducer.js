import { ADD_BOOK, DELETE_ALL_BOOK, DELETE_BOOK } from "./type";

const initialBooks = JSON.parse(localStorage.getItem('books'));

const initialState = initialBooks !== null ? initialBooks : {
    books:  [] 
};

const bookReducer = (state = initialState , action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_BOOK :
            state = {
                ...state,
                books: [...state.books, payload]
            };
            localStorage.setItem('books', JSON.stringify(state));
            return state;
        case DELETE_BOOK :
            state = {
                ...state,
                books: state.books.filter(book => book.id !== payload.id)
            };
            localStorage.setItem('books', JSON.stringify(state));
            return state;
        case DELETE_ALL_BOOK :
            localStorage.removeItem('books');
            return {
                ...state,
                books: []
            }
        default:
            return state;
    }

}

export default bookReducer;