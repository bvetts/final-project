import {useState, useEffect} from "react";

import {Link, useNavigate} from "react-router-dom";
import * as service from "../services/auth-service"

import {useProfile} from "../contexts/profile-context";



const Signup = () => {
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();



const logout = async () => {
    await service.logout()
    navigate('/home')
  }

//navigate on signup isnt woking right, but user is being made?
//it creates user, but then always displays cath error code and doesn't navigate to profile????
  const signup= () =>{
  try{
    service.signup(newUser)
    navigate('/profile')
      }
  catch(e){
      alert('Existing User')
  }

}

//my way of checking if already logged in.
//built most of assignment before professor's example, not redoing it all.
  const [profile, setProfile] = useState({});
  useEffect(async () => {
    const user = await service.profile();
    setProfile(user);

  }, []);


if (profile){
return (
<div>
<button className="btn btn-info" onClick={logout}>Logout</button>
</div>
);


}


else{
  return (
  <>
<h1 className="text-success">New User</h1>

  <div className = 'pb-2'>
  <div className="text-white">Username:</div>
  <input className = "wd-commentBox" type="username" placeholder="Username" onChange={(e) =>
    setNewUser({...newUser,
      username: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">Password:</div>
  <input className = "wd-commentBox" type="password" placeholder="Password" onChange={(e) =>
    setNewUser({...newUser,
      password: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">Email:</div>
  <input className = "wd-commentBox"  type="email" placeholder="Email" onChange={(e) =>
    setNewUser({...newUser,
      email: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">First Name:</div>
  <input className = "wd-commentBox" type="firstName" placeholder="First" onChange={(e) =>
      setNewUser({...newUser,
        firstName: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

  <div className="text-white">Last Name:</div>
  <input className = "wd-commentBox" type="lastName" placeholder="Last" onChange={(e) =>
      setNewUser({...newUser,
        lastName: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

      <div className="text-white">Phone Number:</div>
      <input className = "wd-commentBox" type="phone" placeholder="Phone" onChange={(e) =>
          setNewUser({...newUser,
            phone: e.target.value})}/>
  </div>
  <div className = 'pb-2'>

        <div className="text-white ">Role:</div>
        <select  className = "wd-commentBox" onChange={(e) => setNewUser({...newUser, role: e.target.value})}>
            <option selected value="general">General User</option>
            <option value="journalist">Journalist</option>

        </select>
    </div>
    <div className = "pt-2">
      <button className="btn btn-info " onClick={signup}>Register</button>
      <Link className="btn btn-info float-end" to="/login">Login Instead</Link>
    </div>
</>
  );

  }


  }

export default Signup;

