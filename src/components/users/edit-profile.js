import * as service from "../services/user-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileSearch from "./profile-search.js"
import LoggedProfile from "./loggedin-profile.js"
import OtherProfile from "./other-profiles.js"
import {Link, useNavigate} from "react-router-dom";
import * as security from "../services/auth-service"



const EditProfile = () => {
const {id} = useParams()
const [newUser, setNewUser] = useState({});
const navigate = useNavigate();

console.log(id)
console.log(newUser)
//findUserById
//updateUser

const confirmEdit = () =>{
    try{
    service.updateUser(id,newUser)
        security.login(newUser)
      .then(() => navigate('/profile'))
      .catch(e => alert(e));}
      catch(e){
      alert('problem')

      }

}

useEffect(async () => {
    const user = await service.findUserById(id);
    setNewUser(user);

  }, []);


return(

<div>

<h1>Edit Profile</h1>
<Link className="btn btn-primary btn-block rounded-pill" to="/profile">Back</Link>
  <div className = 'pb-2'>
  Username:
  <input type="username" value={newUser.username} onChange={(e) =>
    setNewUser({...newUser,
      username: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
  Password:
  <input  type="password" value={newUser.password} onChange={(e) =>
    setNewUser({...newUser,
      password: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
  Email:
  <input type="email" value={newUser.email} onChange={(e) =>
    setNewUser({...newUser,
      email: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
  First Name:
  <input type="firstName" value={newUser.firstName} onChange={(e) =>
      setNewUser({...newUser,
        firstName: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
  Last Name:
  <input type="lastName" value={newUser.lastName} onChange={(e) =>
      setNewUser({...newUser,
        lastName: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
      Phone:
      <input  type="phone" value={newUser.phone} onChange={(e) =>
          setNewUser({...newUser,
            phone: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
        Role:
        <select  value={newUser.role} onChange={(e) => setNewUser({...newUser, role: e.target.value})}>
            <option value="general">General User</option>
            <option value="journalist">Journalist</option>



        </select>
    </div>

  <button className="btn btn-primary btn-block rounded-pill " onClick={confirmEdit}>Confirm Changes</button>





</div>
 );

}


export default EditProfile;