import * as service from "../services/auth-service"
import {useState, useEffect} from "react";



const Profile = () => {
  const [profile, setProfile] = useState({});
  useEffect(async () => {
    const user = await service.profile();
    setProfile(user);
  }, []);




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


export default Profile;