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
          <button onClick={commButton} className="btn btn-info btn-sm float-end">Refresh Comments</button>
        </div>
        <h5 className="text-success">Comments:</h5>
    </div>

    <div id="showComments" >

      <ul className="list-group">

        {
          commlist.map(commlist =>
          <li key={commlist._id} className="list-group-item">
              <i onClick={() => deleteC(commlist._id)} className="fa-solid fa-remove fa-2x fa-pull-left"></i>
              <div className="wd-commentContainer">
                  <div className="text-info d-inline ">Article: </div>
                  <Link className="d-inline " to={`/details/${commlist.uuid}`}>{commlist.title}</Link>
              </div>
              <div className="wd-commentContainer">
                <div className = " d-inline-block text-success">{commlist.comment}</div>
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

export default MyCommentList;
