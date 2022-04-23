import * as service from "../services/auth-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileSearch from "./profile-search.js"
import {Link, useNavigate} from "react-router-dom";
import FavoritesList from "../screens/favorites-info.js"
import MyCommentList from "./user-comments.js"


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




if (profile){

return(

<div>
    <div className="d-inline-flex wd-profileContainer">
        <div className="wd-profileInfo ">
         <h4>Welcome {profile.firstName} {profile.lastName}</h4>
         <p>{profile.username}</p>

         <h5>Email: {profile.email}</h5>
         <h5>Phone: {profile.phone}</h5>
         <h5>Role: {profile.role}</h5>

        </div>



        <div className=" wd-profileButtons ">
            <Link to={`/edit/${profile._id}`} className="btn btn-primary btn-block rounded-pill" >Edit Profile</Link>

            <button className="mt-2 btn btn-primary btn-block rounded-pill" onClick={logout}>Logout</button>
        </div>
    </div>

    <br/>
    <div className="">
        <FavoritesList profile={profile}/>
        <MyCommentList profile = {profile} />
    </div>
</div>
 );

}
else{

return(

<>

  <Link className="btn btn-primary btn-block rounded-pill" to="/login">Login</Link>

</>);
}

}


export default LoggedProfile;