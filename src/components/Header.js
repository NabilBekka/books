import { memo } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <h1><Link to='/books'>BOOKS</Link></h1>
        <nav>
            <Link className="linkOne" to='/books'>Accueil</Link>
            <Link className="linkTwo" to='/books/search'>Rechercher</Link>
        </nav>
    </header>
  )
}

//utilisation de la route /books/ à cause du serveur github.

export default memo(Header);