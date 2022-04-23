import {useState, useEffect} from "react";

import {Link, useNavigate} from "react-router-dom";
import * as service from "../services/auth-service"

import {useProfile} from "../contexts/profile-context";



const Signup = () => {
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();



const logout = async () => {
    await service.logout()
    navigate('/register')
  }

//navigate on signup isnt woking right, but user is being made?
//it creates user, but then always displays cath error code and doesn't navigate to profile????
  const signup= () =>{
  try{
    service.signup(newUser)
    navigate('/profile')
      }
  catch(e){
      alert('user already exists')
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
<>
<button className="btn btn-danger"
            onClick={logout}>Logout</button>
</>
);


}


else{
  return (
  <>
<h1>Signup</h1>
<Link className="btn btn-primary btn-block rounded-pill" to="/login">Login Instead</Link>
  <div className = 'pb-2'>
  Username:
  <input type="username" onChange={(e) =>
    setNewUser({...newUser,
      username: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
  Password:
  <input  type="password" onChange={(e) =>
    setNewUser({...newUser,
      password: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
  Email:
  <input type="email" onChange={(e) =>
    setNewUser({...newUser,
      email: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
  First Name:
  <input type="firstName" onChange={(e) =>
      setNewUser({...newUser,
        firstName: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
  Last Name:
  <input type="lastName" onChange={(e) =>
      setNewUser({...newUser,
        lastName: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
      Phone:
      <input  type="phone" onChange={(e) =>
          setNewUser({...newUser,
            phone: e.target.value})}/>
  </div>
  <div className = 'pb-2'>
        Role:
        <select  onChange={(e) => setNewUser({...newUser, role: e.target.value})}>
            <option selected value="general">General User</option>
            <option value="journalist">Journalist</option>



        </select>
    </div>

  <button className="btn btn-primary btn-block rounded-pill " onClick={signup}>Signup</button>

</>
  );

  }


  }

export default Signup;