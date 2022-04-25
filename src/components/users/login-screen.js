
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
    <div>
        <h1 className="text-info">Login</h1>
    </div>
    <div>
        <div className="text-white">Username:</div>
            <input className = "wd-commentBox" onChange={(e) =>setLoginUser({...loginUser,username: e.target.value})}/>
        <div className="text-white">Password:</div>
            <input className = "wd-commentBox" type="password" onChange={(e) =>setLoginUser({...loginUser,password: e.target.value})}/>
        <div className = "pt-2">
            <Link className="btn btn-success float-end" to="/register">New User</Link>
            <button className="btn btn-success " onClick={login}>Login</button>

        </div>
    </div>
</>
    );};

export default Login;

