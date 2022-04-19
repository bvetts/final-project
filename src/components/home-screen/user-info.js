import * as service from "../services/auth-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {Link, useNavigate} from "react-router-dom";


const HomeComponent = () => {

const [profile, setProfile] = useState({});
  useEffect(async () => {
    const user = await service.profile();
    setProfile(user);

  }, []);

if (profile){
    return(

        <div>


            <h4>Username: {profile.username}</h4>

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

/*
Must display generic content for anonymous users. The content must be dynamic based on the latest data.
For instance, you might display snippets and links to the most recent post, review, or member who recently joined
Must display specific content for the logged in user. The content must be dynamic based on the most recent data entered by the logged in user.
For instance, you might display snippets and links to the most recent post or review created by the logged in user
Must be clear to what the Web site is about and must look polished and finished

*/