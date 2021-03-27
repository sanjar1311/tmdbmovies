import {useState, useEffect, useContext} from 'react'
import axios from 'axios'

import MovieCard from "../../components/movieCard/MovieCard"
import {Context} from "../../components/Context"
import Loader from '../../assets/images/loaders/loader.gif'
import "./NewMovies.scss"

function NewMovies() {
  
  const {theme} = useContext(Context)
  const [movie, setMovie] = useState({
    isFatching: false,
    data: [],
    error: null
  })

  
  useEffect(()=> {
    axios.get('https://api.themoviedb.org/3/movie/popular/', {
      params: {
        api_key: 'a06ebeee16246cf7c860221dd5c579a1'
      }
    })
    .then(function (response) {
      setMovie({
        loading: true,
        data: response.data,
        error: false
      })
    })
    .catch(function (error) {
      setMovie({
        loading: true,
        data: [],
        error: true
      })
    }) 
  }, [])
   
  
  return(
    <div className={ theme ? "dark movies-list" : "light movies-list"}>
      <h2 className="page-title">популярные фильмы</h2>
      <ul className="popular-movies-list">
        {
          movie.loading ? (
            movie.data.results.map((item, index)=> (
              <MovieCard 
                key={index}
                id={item.id}
                rating={item.vote_average}
                img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                title={item.title} 
                year={item.release_date}
              />
            ))
          ): <img className="loader" src={Loader} alt="loader"/>
        }
      </ul>
    </div>
  )
}

export default NewMovies