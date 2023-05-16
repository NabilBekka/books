import { memo } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/actionBook";
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        if (/^[a-zA-Z\s]+$/.test(e.target[1].value)){
            const book = {
                id: uuidv4(),
                title: e.target[0].value ,
                author: [e.target[1].value]
            };
            dispatch(addBook(book));
        } else {
            alert("Nom d'auteur incorrect");
        }
        e.target[0].value='';
        e.target[1].value='';
    }

    return (
        <div className="addBook">
            <h1>BOOKS</h1>
            <p>Ajouter un livre à votre bibliothèque</p>
            <form className="addBookForm" onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Titre" required/>
                    <input type="text" placeholder="Auteur" required/>
                </div>
                <button className="submit">Ajouter un livre</button>
            </form>
        </div>
    )
}

export default memo(AddBook);