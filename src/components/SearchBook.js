import { useDispatch } from "react-redux";
import callApi from "../redux/searchBooks/actionSearchBooks";

const SearchBook = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(callApi(e.target[0].value));
        e.target[0].value = ''
    }

    return (
        <div className="searchBook">
            <h1>BOOKS</h1>
            <p>Rechercher un livre sur Google Books</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Recherche" required/>
                <button className="btnSearchBook">Rechercher</button>
            </form>
        </div>
    )
}

export default SearchBook;