import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import Preformatted from "../../utils/pre";
import {Link, useNavigate, useParams} from "react-router-dom";

import * as service from "../services/user-service"

const ProfileSearch = () => {

  const titleSearchRef = useRef('user')
  const {userSearch} = useParams()
  const navigate = useNavigate()
  const [users, setUsers] = useState([])




  //var searchString = 'apple'
  const searchByUsername = async () => {
    const searchString = titleSearchRef.current.value || userSearch || 'val';
    const res = await service.findUserByUsername(searchString);
//    setUsers(response)
    //console.log(res)
    setUsers(res);
    titleSearchRef.current.value = searchString
    //navigate(`/profile/${searchString}`)//there may be an issue with this. not set up correctly for it??
    //console.log(users);

  }
  useEffect(() => {
    searchByUsername()
  }, [])

  return (
    <div>
      <h1>Find Friends</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={searchByUsername}
            className="btn btn-primary float-end">Search</button>
          <input
            ref={titleSearchRef}
            className="form-control w-75"/>
        </li>


            <li className="list-group-item">

              <Link to={`/profile/${users._id}`}>


              <div className = "wd-titles d-inline-block">{users.username}</div>

              </Link>

            </li>


      </ul>

    </div>
  );
};

export default ProfileSearch;


//<Preformatted obj={movies}/>