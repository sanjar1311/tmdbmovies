import {useState, useEffect, useContext} from "react"
import axios from "axios"

import {Context} from "../../components/Context"
import Loader from "../../assets/images/loaders/loader.gif"
import Imdb from "../../assets/images/imdb.jpeg"
import "./SingleMovie.scss"

function SingleMovie({match}) {

  const {theme} = useContext(Context)
  const [movieInfo, setMovieInfo] = useState({
    isFatching: false,
    data: {},
    error: null
  })
  useEffect(()=> {
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
      params: {
        api_key: 'a06ebeee16246cf7c860221dd5c579a1'
      }
    })
    .then(function (response) {
      setMovieInfo({
        isFatching: true,
        data: response.data,
        error: false
      })
    })
    .catch(function (error) {
      setMovieInfo({
        isFatching: true,
        data: {},
        error: true
      })
    }) 
  },[match.params.id])

  return(
    <>
      {
        movieInfo.isFatching ? (
          <div className= { theme ? "dark movie-info" : "light movie-info"}>
            <div className="movie-info-left">
              <img src={`https://image.tmdb.org/t/p/w400/${movieInfo.data.poster_path}`} width="400" height="600" alt="Movie img"/>
              <h2>{movieInfo.data.title}</h2>
            </div>
            <div className="movie-info-right">
              <div className="box">
                <h4>{movieInfo.data.release_date}</h4>
                {
                  movieInfo.data.genres.map(item=>(
                    <div className="box-inner" key={item.id}>
                      <h4 className="genre">{item.name}</h4>
                    </div>  
                  ))
                }
              </div>
              <div className="firs-line">
                <img src={Imdb} width="100" height="40" alt="IMDB"/>
                <span>{movieInfo.data.vote_average}</span>
                <p className="minute-wrapper">{movieInfo.data.runtime}<span className="minute">min</span></p>
                <p>{movieInfo.data.vote_count}</p>
                <button className="sign-up">Подписаться</button>
                <button className="notwork">Не работает фильм</button>
              </div>
              <p>{movieInfo.data.overview}</p>
              <h3>Budget: ${movieInfo.data.budget}</h3>
            </div>
          </div>
        ) : <img className="loader" src={Loader} alt="loader"/>
      }
    </>
  )
}

export default SingleMovie