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
    console.log(_id)
    await serviceC.deleteTuit(_id);
  }



 useEffect(async () => {

   findComments();

  }, [])

//add  username somehow?? add it into the database originally?
  return (
    <div>
    <div>
      <button onClick={findComments} className="btn btn-primary float">Refresh Comments</button>
    </div>
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
  );
};

export default MyCommentList;
