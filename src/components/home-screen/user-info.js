import * as service from "../services/auth-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {Link, useNavigate} from "react-router-dom";

import FavoritesList from "../screens/favorites-info.js"

const HomeComponent = () => {

const [profile, setProfile] = useState({});
  useEffect(async () => {
    const user = await service.profile();
    setProfile(user);

  }, []);

if (profile){
    return(

        <div>


            <h4> Hello {profile.firstName} {profile.lastName}</h4>
            <p>{profile.username}</p>
            <FavoritesList profile={profile}/>

        </div>
  );
}
else{

return(

        <div>


            <Link className="btn btn-primary btn-block rounded-pill" to="/login">Login </Link>

        </div>
  );


}


}

export default HomeComponent;

