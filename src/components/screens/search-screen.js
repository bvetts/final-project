import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import Preformatted from "../../utils/pre";
import {Link, useNavigate, useParams} from "react-router-dom";

const ArticleSearch = () => {

  const titleSearchRef = useRef()
  const {movieSearch} = useParams()
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  //"https://newsdata.io/api/1/news?apikey=pub_64555eb9bec5b8597d64a10c0d74910cac23&language=en"
  //do not change api if possible because the other one doesnt let you look at the
  //historical data at all, which is problem for favs and comments
  const searchUrl = 'https://api.thenewsapi.com/v1/news/top?api_token=PaM8GSjtcuE6O04dIGdsNlZk611wwRYi5BNmwxtV&locale=us&limit=10&language=en&search='
  const key = 'PaM8GSjtcuE6O04dIGdsNlZk611wwRYi5BNmwxtV'

  //var searchString = 'apple'
  const searchByTitle = async () => {
    const searchString = titleSearchRef.current.value || movieSearch || 'apple'
    const response = await axios.get(`${searchUrl}${searchString}`)
    setMovies(response.data.data)
    titleSearchRef.current.value = searchString
    navigate(`/search/${searchString}`)
    console.log(`${searchUrl}?q=${searchString}`)

  }
  useEffect(() => {
    searchByTitle()
  }, [])

  return (
    <div>
      <h1  className="text-info">News Search</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={searchByTitle}
            className="btn btn-success float-end">Search</button>
          <input
            ref={titleSearchRef}
            className="form-control w-75 "/>
        </li>
        {
          movies.map(movie =>
            <li className="list-group-item">

              <Link to={`/details/${movie.uuid}`}>
              <div className = "wd-search-image d-inline-block">
                <img src={movie.image_url} className="d-inline-block me-2 " height={50} />
              </div>

              <div className = "wd-titles d-inline-block">{movie.title}</div>

              </Link>

            </li>
          )
        }

      </ul>

    </div>
  );
};

export default ArticleSearch;


//<Preformatted obj={movies}/>