import React from "react";
import {NavLink} from "react-router-dom";

import LoginStatus from "../login-status";
//links may change yet
const NavigationSidebar = () => {



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
