import * as service from "../services/user-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileSearch from "./profile-search.js"
import {Link, useNavigate} from "react-router-dom";

import MyCommentList from "./user-comments.js"
import FriendsListOther from "./friends-other.js"
import FavoritesList from "../screens/favorites-info.js"

import * as serviceOG from "../services/auth-service"

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

const [orgprofile, setorgProfile] = useState({});
  useEffect(async () => {
    const user = await serviceOG.profile();
    setorgProfile(user);
    searchProfilesbyID();

  }, []);



/*
  useEffect(async () => {
    searchProfilesbyID();

  }, []);
  */


if(profile.role==="general"){
return(



<div>
<div className="row mt-2">

<div className="col-10 col-lg-8 ">

        <div className="wd-profileInfo ">
         <h4 className="text-info">Profile For  {profile.firstName} {profile.lastName}</h4>
         <p className="text-white">Username: {profile.username}</p>
         <p className="text-white">About: {profile.description}</p>


        </div>

        <div className="">
            <FavoritesList profile={profile}/>
            <MyCommentList profile = {profile} />

        </div>
    </div>
    <div className=" d-lg-block col-lg-4 ">
        <FriendsListOther profile = {orgprofile} otherID={profile._id} otherUsername={profile.username} />
        </div>
    </div>







</div>
 );
 }
else{
return(



<div>
<div className="row mt-2">

<div className="col-10 col-lg-8 ">

        <div className="wd-profileInfo ">
         <h4 className="text-info">Profile For  {profile.firstName} {profile.lastName}</h4>
         <p className="text-white">Username: {profile.username}</p>
         <p className="text-white">Journalist For {profile.org}</p>


        </div>

        <div className="">
            <FavoritesList profile={profile}/>
            <MyCommentList profile = {profile} />


        </div>
    </div>
    <div className=" d-lg-block col-lg-4 ">
        <FriendsListOther profile = {orgprofile} otherID={profile._id} otherUsername={profile.username} />
        </div>
    </div>


</div>
 );

}

}


export default OtherProfile;