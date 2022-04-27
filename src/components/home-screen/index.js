
import React from "react";
import HomeComponent from "./user-info.js";
import NewestUser from "./newest-info.js";
import {Link} from "react-router-dom";
import * as service from "../services/auth-service"
import Logout from "../users/logout-function.js";

import Headlines from "./headlines-info.js";
import LoginStatus from "../login-status";
import * as serviceU from "../services/user-service"
import {useEffect, useRef, useState} from 'react';


const Home = () => {

    return(
    <div className="row mt-2">

          <div className="col-10 col-lg-7 ">
            <Headlines />



          </div>
          <div className="d-none d-lg-block col-lg-4 ">
            <div className="wd-boxOutline">
                <NewestUser />
             </div>
             <br/>
             <HomeComponent />


          </div>



    </div>



    );
};
export default Home;