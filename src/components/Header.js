import { memo } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
        <h1><Link to='/'>BOOKS</Link></h1>
        <nav>
            <Link className="linkOne" to='/'>Accueil</Link>
            <Link className="linkTwo" to='/search'>Rechercher</Link>
        </nav>
    </header>
  )
}

export default memo(Header);