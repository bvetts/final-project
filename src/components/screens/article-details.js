import * as service from "../services/user-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {Link, useNavigate} from "react-router-dom";

//ArticleDetail

import * as serviceA from "../services/article-service"

const ArticleDetail = () => {

const navigate = useNavigate()
const {topic} = useParams()
console.log(topic)

const [articles, setArticles] = useState({});

const searchProfilesbyID = async () => {
    const response = await serviceA.findTuitsbyTopic(topic);
    setArticles(response);
    console.log(response);
  }


  useEffect(async () => {

    searchProfilesbyID();

  }, []);


console.log(articles.length)
/*
  useEffect(async () => {
    searchProfilesbyID();

  }, []);
  */


if (articles.length >0){
return(



<div>

    <h3  className="text-white">Topic: {topic}</h3>



        <ul className="list-group">

                {
                  articles.map(artlist =>
                  <li key={artlist._id} className="list-group-item">



                      <h5 className="text-info">{artlist.title}</h5>
                      <div className="wd-commentContainer">
                          By: <Link to={`/profile/${artlist.userID}`}>{artlist.author}</Link><br/>
                          <div className="text-success">{artlist.content}</div>
                          <div className="text-success">{artlist.org}</div>
                      </div>



                  </li>
                  )
                }
              </ul>







</div>
 );
}
else{
return(

<div>


    <h5>None for this topic</h5>



</div>
 );

}



}


export default ArticleDetail;
//{articles[0].topic}