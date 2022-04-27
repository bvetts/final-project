import React, {useEffect, useRef, useState} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";

import * as service from "../services/friends-service"//might need diff name??

//enter one from postman for testing??

const FriendsListOther = ({profile, otherID, otherUsername }) => {

//need the current profile and the "other" value

  const [friends, setFriends] = useState([])

console.log(profile._id)
console.log(otherID)
  const findFriends = async () => {
    const f = await service.friendsByUser(otherID);
    setFriends(f)
  }

  const friendButton = async () => {
      findFriends();
      var element = document.getElementById("myDiv");
      element.style.display = "none";

    }

 useEffect(async () => {

   findFriends();

  }, [])


  //for addign new friend
  const [newF, setnewF] = useState({})

      console.log(otherID)
      console.log(otherUsername)


       newF.userID = profile._id
       newF.friendID = otherID
       newF.username = otherUsername




    const createFriend = async () => {
      setnewF({...newF,
         userID: profile._id,
         friendID : otherID,
         username: otherUsername

         })
        try{
       await service.createFriend(newF);
       }catch(e){
       var element = document.getElementById("fb");
       element.style.display = "none";
       alert('Already Friends')

       }

    }




if (profile._id){
  return (
    <div>
    <div className="pb-2">
    <div className="wd-container pb-2" id="val" >
        <button id = "fb" onClick={createFriend} className="btn btn btn-success float-end">Add Friend</button>
    </div>
    </div>

    <div className="wd-container pb-2" id="val" >
        <div >
          <button id="myDiv" onClick={friendButton} className="btn btn-sm btn-info float-end ">Show Friends</button>
        </div>
        <h5 className="text-white">Their Friends:</h5>
    </div>

      <ul className="list-group">

        {
          friends.map(friends =>
          <li key={friends._id} className="list-group-item">

                <Link to={`/profile/${friends.friendID}`}>

              <div className = " wd-titles d-inline-block">{friends.username}</div>

              </Link>



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
    <div className="pb-2">

    </div>
    <div className="wd-container pb-2" id="val" >
        <div >
          <button id="myDiv" onClick={friendButton} className="btn btn-sm btn-info float-end ">Show Friends</button>
        </div>
        <h5 className="text-white">Their Friends:</h5>
    </div>


      <ul className="list-group">

        {
          friends.map(friends =>
          <li key={friends._id} className="list-group-item">

                <Link to={`/profile/${friends.friendID}`}>

              <div className = " wd-titles d-inline-block">{friends.username}</div>

              </Link>



          </li>
          )
        }
      </ul>

    </div>
  );
}
};

export default FriendsListOther;
