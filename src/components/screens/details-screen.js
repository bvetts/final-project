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

    <div className="row mt-2 ">

      <div className="col-10 col-lg-8 ">


      <h3 className="text-success">{movieDetails.title}</h3>
      <div className="wd-articleImageBox ">
        <img className = "" src={movieDetails.image_url} height={180} />
      </div>
      <h5 className="text-info pt-3">Snip</h5>
        <div className=" text-white">
          {movieDetails.snippet}
        </div>
        <h5 className="text-info pt-3">Other information:</h5>
        <div className="wd-boxOutline">
        <a href={movieDetails.url}>Original Article</a>
        <div>Source: {movieDetails.source}</div>
        <p>Publish Date: {movieDetails.published_at}</p>
        </div>

        </div>
        <div className="col-10 col-lg-4 ">

              <LDetails profile={profile} uuid ={uuid} title = {movieDetails.title} />
        </div>






    </div>
  );
};

export default ArticleDetails;