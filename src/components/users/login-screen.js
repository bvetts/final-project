import {useNavigate} from "react-router-dom";
import * as security from "../services/auth-service"
import {useState, useEffect} from "react";




export const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const navigate = useNavigate()
  const login = () =>
    security.login(loginUser)
      .then((user) => navigate('/profile'))
      .catch(e => alert(e));
  return (
  <>
    <div><h1>Login</h1></div>
    <input onChange={(e) =>setLoginUser({...loginUser,username: e.target.value})}/>
    <input type="password" onChange={(e) =>setLoginUser({...loginUser,password: e.target.value})}/>
    <button className="btn btn-primary btn-block rounded-pill" onClick={login}>Login</button>

</>
    );};

export default Login;