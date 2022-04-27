import React, {useEffect, useRef, useState} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";


import * as service from "../services/auth-service"
import * as serviceC from "../services/comments-service"//might need diff name??

//may need a refresh comment button

const AllComments = () => {

const [profile, setProfile] = useState({});
  useEffect(async () => {
    const user = await service.profile();
    setProfile(user);
    findComments();

  }, []);

  const [commlist, setCommlist] = useState([])

  const findComments = async () => {
    const c = await serviceC.findAllTuits();
    const val = c.slice(0,10 );//sets limit at 10
    setCommlist(val);

  }

  const commButton = async () => {
          findComments();


   }


//add  username somehow?? add it into the database originally?
if (profile){
  return (
    <div>
    <div >
      <h3>Latest Comments By Our Journalists</h3>

    </div>
    <div className = 'pt-2'>
    <button id="fc" className="btn btn-info btn-block btn-sm  " onClick={commButton}>Refresh Comments</button>

        <div className="pt-2">
      <ul className="list-group">

        {
          commlist.map(commlist =>
          <li key={commlist._id} className="list-group-item">

              <div className="wd-commentContainer3">
                  <div className="text-info d-inline ">Article: </div>
                  <Link className="d-inline " to={`/details/${commlist.uuid}`}>{commlist.title}</Link>

              </div>
              <div className="wd-commentContainer">
                  <div className="text-white d-inline ">By: </div>
                  <Link className="d-inline "to={`/profile/${commlist.userID}`}>{commlist.name}</Link>
              </div>
              <div className="wd-commentContainer2 ">
                <div className = " d-inline-block text-success">{commlist.comment}</div>
              </div>


          </li>
          )
        }
      </ul>
      </div>
      </div>

    </div>
  );
  }
else{

return (
    <div>
    <h4 className="text-info">Anonymous Users Must Log In to See Comments </h4>
          <Link className="btn btn-success" to="/login">Login</Link>
    </div>
  );



}


};

export default AllComments;
