import {useNavigate} from "react-router-dom";
import * as security from "../services/auth-service"
import {useState, useEffect} from "react";

export const Logout = () => {
  const [loginUser, setLoginUser] = useState({});
  const navigate = useNavigate()
  const logout = () =>{
    security.logout(loginUser)
      .then((user) => navigate('/login'))
      .catch(e => alert(e));

      }
  return (
  <div>

    <button className="btn btn-primary btn-block rounded-pill" onClick={logout}>Logout</button>

</div>
    );};

export default Logout;