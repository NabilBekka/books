import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllBooks, deleteBook } from "../redux/books/bookSlice";
import FlipMove from 'react-flip-move';

const ListBooks = () => {
  const books = useSelector(state => state.library.books);
  const dispatch = useDispatch();

  const handleDelete = book => {
    dispatch(deleteBook(book));
  }

  const deleteBooks = () => {
    dispatch(deleteAllBooks());
  }

  return (
    <div className="listBooks">
      <h2>Mes livres:</h2>
      {books.length === 0 && <p>Pas de livre pour le moment</p>}
      <FlipMove>
        {
          books.map(book => <div className="book" key={book.id}>
            <p><strong>Titre:</strong> {book.title}</p>
            <p>
              <strong>Auteur:</strong> {book.author && book.author.map((a, i) => <span key={i}>{a}<br/></span>)}
            </p>
            <button className="x" onClick={() => handleDelete(book)}>X</button>
          </div>)
        }
      </FlipMove>
      
      {books.length !== 0 && <button className="btnDeleteBooks" onClick={deleteBooks}>Tout effacer</button>}
    </div>
  )
}

export default memo(ListBooks);