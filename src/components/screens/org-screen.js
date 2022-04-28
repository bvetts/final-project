import * as service from "../services/user-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {Link, useNavigate} from "react-router-dom";

//ArticleDetail

import * as serviceO from "../services/org-service"

const Orgs = () => {

//const navigate = useNavigate()
//const {topic} = useParams()
//console.log(topic)

const [articles, setArticles] = useState({});

const searchProfilesbyID = async () => {
    const response = await serviceO.findAllTuits();
    console.log(response)
    setArticles(response);
    console.log(response);
  }


  useEffect(async () => {

    searchProfilesbyID();

  }, []);

console.log(articles.length)

if (articles.length >0){
return(



<div>

    <h2>Our Journalists Work For:</h2>



        <ul className="list-group">

                {
                  articles.map(artlist =>
                  <li key={artlist._id} className="list-group-item">

                      <div className="text-info">{artlist.title}</div>
                      <div className="text-success">{artlist.description}</div>





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


export default Orgs;
//{articles[0].topic}