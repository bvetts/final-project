import React, {useEffect, useRef, useState} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";


import * as service from "../services/auth-service"
import * as serviceC from "../services/article-service"//might need diff name??

//enter one from postman for testing??

const MyArticleList = ({profile}) => {


  const [commlist, setCommlist] = useState([])

console.log(profile._id)

  const findComments = async () => {
    const c = await serviceC.findTuitsbyuserID(profile._id);
    setCommlist(c)
  }
  const deleteC = async (_id) =>  {
    //console.log(_id)
    await serviceC.deleteTuit(_id);
    findComments();
  }


  const commButton = async () => {
        findComments();
        //var element = document.getElementById("myDivC");
        //element.style.display = "none";
        //var element2 = document.getElementById("showComments");
        //element2.style.display = "show";

      }



 useEffect(async () => {

   findComments();

  }, [])

//add  username somehow?? add it into the database originally?
if (profile.role ==="journalist"){
  return (
    <div>

    <div className="wd-container pb-2" id="val" >
        <div >
          <button onClick={commButton} className="btn btn-info btn-sm float-end">Refresh Articles</button>
        </div>
        <h5 className="text-success">Articles:</h5>
    </div>

    <div id="showComments" >

      <ul className="list-group">

        {
          commlist.map(artlist =>
          <li key={artlist._id} className="list-group-item">


            <i onClick={() => deleteC(artlist._id)} className="fa-solid fa-remove fa-2x fa-pull-right"></i>
            <div>
              <h5 >{artlist.title}</h5>

              By: <Link to={`/profile/${artlist.userID}`}>{artlist.author}</Link><br/>
              <div className="wd-commentContainer">
                <div className="text-success">{artlist.content}</div>
                <div className="text-info">Topic: <Link to={`/article/${artlist.topic}`}>{artlist.topic}</Link><br/></div>

                 <div className="text-info"> Partner: <Link className="ml-2"to={`/partners`}> {artlist.org}</Link><br/></div>
              </div>
              </div>


          </li>
          )
        }
      </ul>
    </div>

    </div>
  );
  }

else{
  return (
    <div>
    <br/>
    <br/>



    </div>
  );
  }


};

export default MyArticleList;
