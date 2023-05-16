import { applyMiddleware, combineReducers, createStore } from "redux";
import bookReducer from "./books/bookReducer";
import searchBookReducer from "./searchBooks/searchBooksReaducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    library : bookReducer,
    googleBooks : searchBookReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;