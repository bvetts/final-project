



//
//<div className="text-success">Welcome Our Newest User:</div>
 //             <Link className="d-inline "to={`/profile/${user[0]._id}`}>{user[0].username}</Link>





import React from "react";
import HomeComponent from "./user-info.js";
import {Link} from "react-router-dom";
import * as service from "../services/auth-service"
import Logout from "../users/logout-function.js";

import Headlines from "./headlines-info.js";
import LoginStatus from "../login-status";
import * as serviceU from "../services/user-service"
import {useEffect, useRef, useState} from 'react';


const NewestUser= () => {

 const [user, setUser] = useState([])


   const findUser = async () => {
     const u = await serviceU.findAllUsers();
     setUser(u);

   }
  useEffect(async () => {

    findUser();

   }, [])

//user = user[0]
const val = user.slice(0,1 )
console.log(user)
console.log(val)

return(
    <div className="">
            <div className="text-success">
            Welcome Our Newest User:
            </div>


    <ul >
        {
          val.map(u =>
          <li className="wd-specialList" >
            <Link to={`/profile/${u._id}`}>

              <div className = " wd-titles d-inline-block">{u.username}</div>


              </Link>



        </li>
          )
        }
        </ul>



    </div>



    );



};

export default NewestUser;
//<div className="text-success">Welcome Our Newest User:</div>
 //                       <Link className="d-inline "to={`/profile/${user[0]._id}`}>{user[0].username}</Link>