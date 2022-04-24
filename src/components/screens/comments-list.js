import React, {useEffect, useRef, useState} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";


import * as service from "../services/auth-service"
import * as serviceC from "../services/comments-service"//might need diff name??

//may need a refresh comment button

const CommentList = ({profile, uuid, title}) => {


  const [commlist, setCommlist] = useState([])

console.log(uuid)
console.log(profile._id)
console.log(title)

  const findComments = async () => {
    const c = await serviceC.findTuitsbyUUID(uuid);
    setCommlist(c);

  }
  const deleteC = async (id) =>  {
    await serviceC.deleteTuit(id);
    findComments();
  }

  const commButton = async () => {
          findComments();
          var element = document.getElementById("myDivC");
          element.style.display = "none";
          var element2 = document.getElementById("showComments");
          element2.style.display = "show";

   }

const [newComment, setNewComment] = useState({});

newComment.userID = profile._id
     newComment.uuid = uuid
     newComment.title = title
     newComment.name = profile.username

const writeComment = async () =>{
    setNewComment({...newComment,
       userID: profile._id,
       uuid : uuid,
       title: title,
       name:profile.username

       })
    serviceC.createTuit(newComment);

    findComments();
}

 useEffect(async () => {

   findComments();

  }, [])

//add  username somehow?? add it into the database originally?
if (profile.role=="journalist"){
  return (
    <div>
    <div >
      <h1>Comments</h1>

      <div className = 'pb-2'>

            <textarea placeholder="Write a Comment" onChange={(e) =>
                setNewComment({...newComment,
                  comment: e.target.value})}></textarea>
        </div>

        <button className="btn btn-primary btn-block rounded-pill " onClick={writeComment}>Post Comment</button>


    </div>

      <ul className="list-group">

        {
          commlist.map(commlist =>
          <li key={commlist._id} className="list-group-item">

              By: <Link to={`/profile/${commlist.userID}`}>{commlist.name}</Link>
              <br/>

              <div className = " wd-titles d-inline-block">{commlist.comment}</div>



          </li>
          )
        }
      </ul>

    </div>
  );
  }
else{

return (
    <div>
    <div >
      <h1>Comments</h1>
      <p>Only Journalists Can Comment </p>



    </div>

      <ul className="list-group">

        {
          commlist.map(commlist =>
          <li key={commlist._id} className="list-group-item">

              By: <Link to={`/profile/${commlist.userID}`}>{commlist.name}</Link>
              <br/>

              <div className = " wd-titles d-inline-block">{commlist.comment}</div>



          </li>
          )
        }
      </ul>

    </div>
  );



}


};

export default CommentList;
