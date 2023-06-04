import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../redux/books/bookSlice";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResultSearchBooks = () => {
    const {books, isLoading, error} = useSelector(books => books.googleBooks);
    const [displayInfos, setDisplayInfos] = useState(null);
    const dispatch = useDispatch();

    const handleDisplayInfo = id => {
        if (displayInfos !== id) {
            setDisplayInfos(id);
        }
        else {
            setDisplayInfos(null);
        }
    }

    const handleSave = data => {
        const book = {
            id: uuidv4(),
            title: data.title ,
            author: data.authors ? data.authors : ['Indisponible']
        };
        dispatch(addBook(book));
        toast.info('Livre enregistré dans la bibliothèque avec succès!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    return (
        <div className="resultSearchBooks">
            {isLoading ? <div className="loading"></div> :
                error ? <div className="errorLoading">Erreur de chargement!</div> :
                    books.map(book => <div className="result" key={book.id}>
                        <div className="resultTitle"><span onClick={() => handleDisplayInfo(book.id)}>{book.volumeInfo.title}</span></div>
                        {displayInfos === book.id && <div className="infos">
                            <div><strong>Titre: </strong><br/>{book.volumeInfo.title}</div>
                            <div>
                                <strong>Auteur(s): </strong>
                                {book.volumeInfo.authors ? book.volumeInfo.authors.map((author, i)=><div key={i}>{author}</div>) : 'Indisponible'}
                            </div>
                            <p className="description">
                                <strong>Description: </strong>
                                <br/>
                                {book.volumeInfo.description ? book.volumeInfo.description : 'Indisponible'}
                            </p>
                            <div className="btnInfos">
                                {
                                    book.volumeInfo.canonicalVolumeLink && <a href={book.volumeInfo.canonicalVolumeLink} target="_blank" rel="noreferrer" >Plus d'infos</a>
                                }
                                <button onClick={() => handleSave(book.volumeInfo)}>Enregistrer</button>
                            </div>
                        </div>}
                    </div>)
            }
            <ToastContainer />
        </div>
    )
}

export default ResultSearchBooks;