import * as service from "../services/user-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileSearch from "./profile-search.js"
import {Link, useNavigate} from "react-router-dom";

import MyCommentList from "./user-comments.js"
import FavoritesList from "../screens/favorites-info.js"

const OtherProfile = () => {

const navigate = useNavigate()
const {id} = useParams()
console.log(id)

const [profile, setProfile] = useState({});

const searchProfilesbyID = async () => {
    const response = await service.findUserById(id);
    setProfile(response);
    console.log(response);
  }


  useEffect(async () => {
    searchProfilesbyID();

  }, []);



return(



<div>
<div className="d-inline-flex wd-profileContainer">
        <div className="wd-profileInfo ">
         <h4>Profile For  {profile.firstName} {profile.lastName}</h4>
         <p>{profile.username}</p>

         <h5>Role: {profile.role}</h5>

        </div>



        <div className=" wd-profileButtons ">

            <button className="mt-2 btn btn-primary btn-block rounded-pill" >Friend Them(not written)</button>
        </div>
    </div>

    <div className="">
        <FavoritesList profile={profile}/>
        <MyCommentList profile = {profile} />
    </div>



</div>
 );

}


export default OtherProfile;