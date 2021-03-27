import {useContext} from "react"
import {Link} from 'react-router-dom'

import {Context} from "../Context"
import "./MovieCard.scss"

function MovieCard({id, rating, img, title, year}) {

  const {theme} = useContext(Context)

  return (
    <>
      <li className={theme ? "dark movie-item" : "light movie-item"}>
        <Link to={`/movie/${id}`} className="movie-item-link">
          <p className="rating">{rating}</p>
          <img src={img} width="250" height="350" alt="img"/>
          <h2>{title}</h2>
          <div className="info-wrapper">
            <p>{year}</p>
            <button>more info</button>
          </div>
        </Link>
      </li>
    </>
  )
}

export default MovieCard