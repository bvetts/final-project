import React from "react";
import {NavLink} from "react-router-dom";
import * as service from "../services/auth-service"
import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
//import LoginStatus from "../login-status";
//links may change yet
const NavigationSidebar = () => {

//might still use this late, but i'm not currently
const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  useEffect(async () => {
    const user = await service.profile();
    setProfile(user);

  }, []);




    return(
        <>
            <div className="list-group">

                <NavLink  to="/home" className="list-group-item" >
                        <i className="fa fa-home"> <span className="wd-navLabels" > Home</span> </i> </NavLink>
                <NavLink to="/search" className="list-group-item" >
                        <i className="fa fa-hashtag"> <span className="wd-navLabels" > Search</span> </i> </NavLink>

                <NavLink to="/profile"  className="list-group-item">
                         <i className="fa fa-user"><span className="wd-navLabels" > Profile</span>  </i> </NavLink>



            </div>
            <div className="d-grid mt-2">
                <NavLink  to="/privacy" className="btn btn-primary btn-block rounded-pill">Privacy Policy</NavLink>
            </div>


        </>
    );




}
export default NavigationSidebar;
