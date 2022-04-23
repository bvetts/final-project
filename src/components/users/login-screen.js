
import * as security from "../services/auth-service"
import {useState, useEffect} from "react";

import {Link, useNavigate} from "react-router-dom";


export const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const navigate = useNavigate()
  const login = () =>{
    try{
    security.login(loginUser)
      .then((user) => navigate('/profile'))
      .catch(e => alert(e));

      }
      catch(e){
            alert('invalid user')
      }

      }


  return (
  <>
    <div><h1>Login</h1></div>
    <input onChange={(e) =>setLoginUser({...loginUser,username: e.target.value})}/>
    <input type="password" onChange={(e) =>setLoginUser({...loginUser,password: e.target.value})}/>
    <button className="btn btn-primary btn-block rounded-pill" onClick={login}>Login</button>
    <Link className="btn btn-primary btn-block rounded-pill" to="/register">New User</Link>
</>
    );};

export default Login;