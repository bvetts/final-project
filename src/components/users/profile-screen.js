import * as service from "../services/auth-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileSearch from "./profile-search.js"
import LoggedProfile from "./loggedin-profile.js"
import OtherProfile from "./other-profiles.js"
import {Link, useNavigate} from "react-router-dom";




const Profile = () => {





//change some of teh views for size bootstrap
return(

<div>

<div className="row mt-2">

      <div className="col-10 col-lg-7 ">
        <LoggedProfile />

      </div>
      <div className="d-none d-lg-block col-lg-4 ">
        <ProfileSearch />

      </div>



    </div>



</div>
 );

}


export default Profile;