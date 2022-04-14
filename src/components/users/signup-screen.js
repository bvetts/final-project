import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import * as service from "../services/auth-service"

const Signup = () => {
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();
  const signup= () =>{
    service.signup(newUser)
      .then(() => navigate('/profile'))
      .catch(e => alert(e));

}


  return (
  <>
<h1>Signup</h1>

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

  <button className="btn btn-primary btn-block rounded-pill " onClick={signup}>Signup</button>

</>
  );}

export default Signup;