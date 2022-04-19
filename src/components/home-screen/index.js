
import React from "react";
import HomeComponent from "./user-info.js";
import {Link} from "react-router-dom";
import * as service from "../services/auth-service"
import Logout from "../users/logout-function.js";

import Headlines from "./headlines-info.js";
import LoginStatus from "../login-status";
import FavoritesList from "./favorites-info.js";

const Home = () => {
    return(
        <div >

            <div >
                <Headlines />
            </div>
            <div >
                <HomeComponent />
            </div>
            <div >
                <FavoritesList/>
            </div>




        </div>
    );
};
export default Home;