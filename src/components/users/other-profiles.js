import * as service from "../services/user-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileSearch from "./profile-search.js"
import {Link, useNavigate} from "react-router-dom";




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


 <h4>Username: {profile.username}</h4>

 <h4>User: {profile.firstName} {profile.lastName}</h4>
<p>need to include other info to be added later such as liked articles or most recent search</p>
<p>also, need to remove the above if not logged in and display a search for other profiles instead.
search needs to be possible when logged in too</p>



</div>
 );

}


export default OtherProfile;