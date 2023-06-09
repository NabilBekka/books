import { memo } from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <p>Projet réalisé par NabilBekka en 2023, en s'inspirant de la formation <a href="https://www.udemy.com/course/formation-react-js-pour-tous/" target="_blanc">React JS pour Tous</a> (partie Redux).</p>
      <p>Utilisation de <a href="https://developers.google.com/books/docs/v1/using?hl=fr" target="_blanc">GOOGLE BOOKS API</a> pour la recherche des livres sur Google Books.</p>
    </footer>
  )
}

export default memo(Footer);