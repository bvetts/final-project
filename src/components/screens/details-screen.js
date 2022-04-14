import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Preformatted from "../../utils/pre";


//save likes/comments on articles here?

const OmdbDetails = () => {
  const [movieDetails, setMovieDetails] = useState({})
  const [ourMovieDetails, setOurMovieDetails] = useState({})
  const url = 'https://api.thenewsapi.com/v1/news/uuid/'
  const token = '?api_token=PaM8GSjtcuE6O04dIGdsNlZk611wwRYi5BNmwxtV'
  const {uuid} = useParams()
  const searchMovieByImdbID = async () => {
    const response = await axios.get(`${url}${uuid}${token}`)
    setMovieDetails(response.data)
    console.log(`${url}${uuid}${token}`)
  }
  const searchOurMovieByImdbID = async () => {
    const response = await axios.get(`http://localhost:4000/api/movies/${uuid}`)
    setOurMovieDetails(response.data)
  }
  useEffect(() => {
    searchMovieByImdbID()
    searchOurMovieByImdbID()
  }, [])

  const handleLike = async () => {
    const movie = {
      title: movieDetails.title,
      poster: movieDetails.image_url,
      uuid: movieDetails.uuid
    }
    const response = await axios.post("http://localhost:4000/api/likes", movie)
    setOurMovieDetails(response.data)
  }

  return (
    <div>
      <h3>{movieDetails.title}</h3>
        <img src={movieDetails.image_url} height={100}/>
        <p>
          {movieDetails.snippet}
        </p>
        <p>{movieDetails.url}</p>
        <p>{movieDetails.published_at}</p>
        <p>{movieDetails.source}</p>

        <button onClick={handleLike}>Like ({ourMovieDetails && ourMovieDetails.likes})</button>




    </div>
  );
};

export default OmdbDetails;