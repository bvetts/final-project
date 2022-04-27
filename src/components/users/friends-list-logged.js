import React, {useEffect, useRef, useState} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";

import * as service from "../services/friends-service"//might need diff name??

//enter one from postman for testing??

const FriendsListL = ({profile}) => {

  const [friends, setFriends] = useState([])

console.log(profile._id)
  const findFriends = async () => {
    const f = await service.friendsByUser(profile._id);
    setFriends(f)
  }
  const deleteF = async (id) =>  {
    await service.deleteFriend(id);
    findFriends();
  }
  const friendButton = async () => {
      findFriends();
      //var element = document.getElementById("fl");
      //element.style.display = "none";

    }

 useEffect(async () => {

   findFriends();

  }, [])

  return (
    <div>

    <div className="wd-container pb-2" id="val" >
        <div>
          <button id="fl" onClick={friendButton} className="btn btn-info btn-sm float-end">Refresh Friends</button>
        </div>
        <h5 className="text-success">My Friends:</h5>
    </div>


      <ul className="list-group">

        {
          friends.map(friends =>
          <li key={friends._id} className="list-group-item">
          <i onClick={() => deleteF(friends._id)} className="fa-solid fa-remove fa-2x fa-pull-left"></i>

                <Link to={`/profile/${friends.friendID}`}>

              <div className = " wd-titles d-inline-block">{friends.username}</div>

              </Link>



          </li>
          )
        }
      </ul>

    </div>
  );
};

export default FriendsListL;
//<i onClick={() => deleteF(fav._id)} className="fa-solid fa-remove fa-2x fa-pull-left"></i>
