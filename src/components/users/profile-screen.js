import * as service from "../services/auth-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileSearch from "./profile-search.js"
import LoggedProfile from "./loggedin-profile.js"
import OtherProfile from "./other-profiles.js"
import {Link, useNavigate} from "react-router-dom";




const Profile = () => {






return(

<div>

<ProfileSearch />
<LoggedProfile />


</div>
 );

}


export default Profile;