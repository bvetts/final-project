import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Preformatted from "../../utils/pre";
import * as service from "../services/auth-service"
import LDetails from "./loggedin-details.js"
import CreateFavorite from "./create-favorite.js"
//allow a logged in user to favorite article here
//allow a logged in journalist to post comments here

const ArticleDetails = () => {
  const [profile, setProfile] = useState({});


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


    searchMovieByImdbID();
    searchOurMovieByImdbID();

  }, [])
  useEffect(async () => {
      const user = await service.profile();
      setProfile(user);

    }, []);



  return (
    <div>
      <h3>{movieDetails.title}</h3>
        <img src={movieDetails.image_url} height={100}/>
        <p>
          {movieDetails.snippet}
        </p>
        <a href={movieDetails.url}>Original Article</a>
        <p>Publish Date: {movieDetails.published_at}</p>
        <p>Source: {movieDetails.source}</p>



        <LDetails profile={profile} uuid ={uuid} title = {movieDetails.title} />


    </div>
  );
};

export default ArticleDetails;