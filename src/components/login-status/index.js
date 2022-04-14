

import React from "react";
import {NavLink} from "react-router-dom";
import Logout from "../users/logout-function.js";
import {Link} from "react-router-dom";
//links may change yet


//change this so its only displays certain things if logged in or not. unsure how to do that yet, but shouldn't be too hard.
//ex cant register or login if logged in already, cant log out if not not logged in already
const LoginStatus = () => {
    return(
        <>
        <ul className="list-group">
            <li className="list-group-item">
            <Link className="btn btn-primary btn-block rounded-pill" to="/register">Register</Link>
            </li>
            <li className="list-group-item">
            <Link className="btn btn-primary btn-block rounded-pill" to="/login">Login</Link>
            </li>
            <li className="list-group-item">
            <Logout />
            </li>
        </ul>

        </>
    );



}
export default LoginStatus;