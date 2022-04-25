import React, {useEffect, useRef, useState} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";


import * as service from "../services/auth-service"
import * as serviceC from "../services/comments-service"//might need diff name??

//enter one from postman for testing??

const MyCommentList = ({profile}) => {


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
        var element = document.getElementById("myDivC");
        element.style.display = "none";
        var element2 = document.getElementById("showComments");
        element2.style.display = "show";

      }



 useEffect(async () => {

   findComments();

  }, [])

//add  username somehow?? add it into the database originally?
if (profile.role ==="journalist"){
  return (
    <div>
    <h5 className="text-success">Comments:</h5>

        <div id="myDivC">
          <button onClick={commButton} className="btn btn-info float">Show Comments</button>
        </div>
    <div id="showComments" >

      <ul className="list-group">

        {
          commlist.map(commlist =>
          <li key={commlist._id} className="list-group-item">
              <i onClick={() => deleteC(commlist._id)} className="fa-solid fa-remove fa-2x fa-pull-left"></i>

              <Link to={`/details/${commlist.uuid}`}>{commlist.title}</Link>

              <div className = "wd-titles d-inline-block">{commlist.comment}</div>



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

export default MyCommentList;
