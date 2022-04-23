import React, {useEffect, useRef, useState} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";


import * as service from "../services/auth-service"
import * as serviceC from "../services/comments-service"//might need diff name??

//enter one from postman for testing??

const CommentList = ({uuid}) => {


  const [commlist, setCommlist] = useState([])

console.log(uuid)

  const findComments = async () => {
    const c = await serviceC.findTuitsbyUUID(uuid);
    setCommlist(c);

  }
  const deleteC = async (id) =>  {
    await serviceC.deleteTuit(id);
  }


 useEffect(async () => {

   findComments();

  }, [])

//add  username somehow?? add it into the database originally?
  return (
    <div>
    <div >
      <h1>Comments</h1>
          <div >
            <button onClick={findComments} className="btn btn-primary float-end" >Comments</button>
           </div>
    </div>

      <ul className="list-group">

        {
          commlist.map(commlist =>
          <li key={commlist._id} className="list-group-item">

              <Link to={`/profile/${commlist.userID}`}>{commlist.name}</Link>

              <div className = "wd-titles d-inline-block">{commlist.comment}</div>



          </li>
          )
        }
      </ul>

    </div>
  );
};

export default CommentList;
//<i onClick={() => deleteC(commlist._id)} className="fa-solid fa-remove fa-2x fa-pull-left"></i>
//make it so they can only delete their own tuits??