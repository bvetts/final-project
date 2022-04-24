import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Preformatted from "../../utils/pre";
import {Link, useNavigate} from "react-router-dom";






//save likes/comments on articles here?

const Headlines = () => {
  const [articles, setArticles]  = useState([])
//this is using backup api, change to the other one for looking at and storing favs/comments
  //const url = "https://newsdata.io/api/1/news?apikey=pub_64555eb9bec5b8597d64a10c0d74910cac23&language=en"

  //actual api:
  const url = 'https://api.thenewsapi.com/v1/news/top?locale=us&language=en&api_token=PaM8GSjtcuE6O04dIGdsNlZk611wwRYi5BNmwxtV'
  //const token = '?api_token=PaM8GSjtcuE6O04dIGdsNlZk611wwRYi5BNmwxtV'
  //const {uuid} = useParams()
  const collectArticles = async () => {
    const response = await axios.get(`${url}`)
    setArticles(response.data.data)
    //setArticles(response.data.results)

  }

  useEffect(() => {
    collectArticles()

  }, [])


  return (
    <div>
        <h3>Top News Today</h3>
      <ul className="list-group">

          {
            articles.map(article =>
              <li className="list-group-item">

                <Link to={`/details/${article.uuid}`}>
                <div className = "wd-search-image d-inline-block">
                  <img src={article.image_url} className="d-inline-block me-2 " height={50} />
                </div>

                <div className = "wd-titles d-inline-block">{article.title}</div>

                </Link>

              </li>
            )
          }

        </ul>



    </div>
  );
};

export default Headlines;