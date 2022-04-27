import * as service from "../services/auth-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {Link, useNavigate} from "react-router-dom";

import FavoritesList from "../screens/favorites-info.js"
import MyCommentList from "../users/user-comments.js"


const HomeComponent = () => {

const [profile, setProfile] = useState({});
  useEffect(async () => {
    const user = await service.profile();
    setProfile(user);

  }, []);

if (profile.role=="general"){
    return(

        <div >


            <h4 className="text-success"> Hello {profile.firstName} {profile.lastName}</h4>
            <p className="text-white">Username: {profile.username}</p>

            <h5 className="text-success">My Favorite Articles:</h5>
            <FavoritesList profile={profile}/>

        </div>
  );
}
if (profile.role=="journalist"){
    return(

        <div >


            <h4 className="text-success"> Hello {profile.firstName} {profile.lastName}</h4>
            <p className="text-white">Username: {profile.username}</p>


            <MyCommentList profile = {profile} />

        </div>
  );
}
else{

return(

        <div>

            <h5 className="text-info">Anonymous User</h5>
            <Link className="btn btn-success" to="/login">Login </Link>

        </div>
  );


}


}

export default HomeComponent;

