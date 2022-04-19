import * as service from "../services/auth-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileSearch from "./profile-search.js"
import {Link, useNavigate} from "react-router-dom";




const LoggedProfile = () => {


  const [profile, setProfile] = useState({});
  useEffect(async () => {
    const user = await service.profile();
    setProfile(user);

  }, []);


if (profile){

return(

<div>
 <h4>Username: {profile.username}</h4>
 <h4>Email: {profile.email}</h4>
 <h4>Phone: {profile.phone}</h4>
 <h4>User: {profile.firstName} {profile.lastName}</h4>
<p>need to include other info to be added later such as liked articles or most recent search</p>
<p>also, need to remove the above if not logged in and display a search for other profiles instead.
search needs to be possible when logged in too</p>




</div>
 );

}
else{
return(<>
<br/>
    <ul className="list-group">
        <li className="list-group-item">
            <Link className="btn btn-primary btn-block rounded-pill" to="/register">Register</Link>
        </li>
        <li className="list-group-item">
            <Link className="btn btn-primary btn-block rounded-pill" to="/login">Login</Link>
        </li>


    </ul>

</>);
}

}


export default LoggedProfile;