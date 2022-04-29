import * as service from "../services/auth-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileSearch from "./profile-search.js"
import {Link, useNavigate} from "react-router-dom";
import FavoritesList from "../screens/favorites-info.js"
import MyCommentList from "./user-comments.js"
import FriendsListL from "./friends-list-logged.js"
import MyArticleList from "./my-articles.js"


const LoggedProfile = () => {

const navigate = useNavigate()
  const [profile, setProfile] = useState({});
  useEffect(async () => {
    const user = await service.profile();
    setProfile(user);

  }, []);

  const logout = () =>{
      service.logout()
        .then((user) => navigate('/login'))
        .catch(e => alert(e));

        }




if (profile.role==="general"){

return(

<div>
    <div className="d-inline-flex wd-profileContainer">
        <div className="wd-profileInfo ">
         <h2 className="text-info">Welcome {profile.firstName} {profile.lastName}</h2>

         <div className="wd-boxOutline">
             <h5 className="text-white">Username: {profile.username}</h5>


             <h5>Email: {profile.email}</h5>
             <h5>Phone: {profile.phone}</h5>
         </div>
         <br/>
         <p className="text-white">About: {profile.description}</p>



        </div>



        <div className=" wd-profileButtons ">
            <Link to={`/edit/${profile._id}`} className="btn btn-info float-end " >Edit Profile</Link>

            <button className="mt-2 btn btn-info float-end" onClick={logout}>Logout</button>
        </div>
    </div>

    <br/>
    <div className="">
        <hr/>
        <FavoritesList profile={profile}/>

        <MyCommentList profile = {profile} />
        <hr/>
        <FriendsListL profile = {profile} />

    </div>
    <br/>
    <br/>
</div>
 );

}
if (profile.role==="journalist"){

return(

<div>
    <div className="d-inline-flex wd-profileContainer">
        <div className="wd-profileInfo ">
         <h2 className="text-info">Welcome {profile.firstName} {profile.lastName}</h2>

         <div className="wd-boxOutline">
             <h5 className="text-white">Username: {profile.username}</h5>


             <h5>Email: {profile.email}</h5>
             <h5>Phone: {profile.phone}</h5>
             <h5 className="text-white">Journalist For: <Link className="ml-2"to={`/partners`}> {profile.org}</Link></h5>
         </div>
         <br/>




        </div>



        <div className=" wd-profileButtons ">
            <Link to={`/edit/${profile._id}`} className="btn btn-info float-end " >Edit Profile</Link>

            <button className="mt-2 btn btn-info float-end" onClick={logout}>Logout</button>
        </div>
    </div>

    <br/>
    <div className="">

        <FavoritesList profile={profile}/>
        <hr/>
        <MyCommentList profile = {profile} />
        <hr/>
        <FriendsListL profile = {profile} />
        <hr/>
           <MyArticleList profile = {profile}/>
    </div>
    <br/>
    <br/>
</div>
 );

}

else{

return(

<>
<h3 className="text-success">Login to See Your Profile</h3>
  <Link className="btn btn-lg btn-info" to="/login">Login</Link>

</>);
}

}


export default LoggedProfile;