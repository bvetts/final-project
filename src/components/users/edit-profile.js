import * as service from "../services/user-service"
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProfileSearch from "./profile-search.js"
import LoggedProfile from "./loggedin-profile.js"
import OtherProfile from "./other-profiles.js"
import {Link, useNavigate} from "react-router-dom";
import * as security from "../services/auth-service"


//might need to be different based on the user role? not changeable on edit screen?
//do a if else based on role I think. Might need completly different input things, so maybe a completly different screen.
const EditProfile = () => {
const {id} = useParams()
const [newUser, setNewUser] = useState({});
const navigate = useNavigate();

console.log(id)
console.log(newUser)


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


if(newUser.role==="general"){
return(

<div>

<h1>Edit Profile</h1>
<Link className="btn btn-info btn-block rounded-pill" to="/profile">Back</Link>
  <div className = 'pb-2 pt-2'>
  <div className="text-white">Username:</div>
  <input className = "wd-commentBox" type="username" value={newUser.username} onChange={(e) =>
    setNewUser({...newUser,
      username: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">Password:</div>
  <input className = "wd-commentBox" type="password" value={newUser.password} onChange={(e) =>
    setNewUser({...newUser,
      password: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">Email:</div>
  <input className = "wd-commentBox" type="email" value={newUser.email} onChange={(e) =>
    setNewUser({...newUser,
      email: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">First Name:</div>
  <input  className = "wd-commentBox" type="firstName" value={newUser.firstName} onChange={(e) =>
      setNewUser({...newUser,
        firstName: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">Last Name:</div>
  <input className = "wd-commentBox" type="lastName" value={newUser.lastName} onChange={(e) =>
      setNewUser({...newUser,
        lastName: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

      <div className="text-white">Phone:</div>
      <input  className = "wd-commentBox" type="phone" value={newUser.phone} onChange={(e) =>
          setNewUser({...newUser,
            phone: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

        <div className="text-white">About Me:</div>
        <textarea className = "wd-commentBox" type="phone" value={newUser.description} onChange={(e) =>
            setNewUser({...newUser,
              description: e.target.value})}/>
    </div>


  <button className="btn btn-success btn-block rounded-pill " onClick={confirmEdit}>Confirm Changes</button>





</div>
 );
 }
else{
return(

<div>


<h1>Edit Profile</h1>
<Link className="btn btn-info btn-block rounded-pill" to="/profile">Back</Link>
  <div className = 'pb-2 pt-2'>
  <div className="text-white">Username:</div>
  <input className = "wd-commentBox" type="username" value={newUser.username} onChange={(e) =>
    setNewUser({...newUser,
      username: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">Password:</div>
  <input className = "wd-commentBox" type="password" value={newUser.password} onChange={(e) =>
    setNewUser({...newUser,
      password: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">Email:</div>
  <input className = "wd-commentBox" type="email" value={newUser.email} onChange={(e) =>
    setNewUser({...newUser,
      email: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">First Name:</div>
  <input  className = "wd-commentBox" type="firstName" value={newUser.firstName} onChange={(e) =>
      setNewUser({...newUser,
        firstName: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">Last Name:</div>
  <input className = "wd-commentBox" type="lastName" value={newUser.lastName} onChange={(e) =>
      setNewUser({...newUser,
        lastName: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

      <div className="text-white">Phone:</div>
      <input  className = "wd-commentBox" type="phone" value={newUser.phone} onChange={(e) =>
          setNewUser({...newUser,
            phone: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

        <div className="text-white">Journalist Organization:</div>

        <input className = "wd-commentBox"  type="org" value={newUser.org} onChange={(e) =>
            setNewUser({...newUser,
              org: e.target.value})}/>

    </div>


  <button className="btn btn-success btn-block rounded-pill " onClick={confirmEdit}>Confirm Changes</button>




</div>
 );



}



}


export default EditProfile;
