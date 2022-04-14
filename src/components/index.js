import React, {useEffect} from "react";
import './index.css';
//import HomeScreen from "./home-screen";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./navigation-sidebar";
import LoginStatus from "./login-status";




const Screen = () => {
  return (

    <div className="row mt-2">
      <div className="col-2 col-lg-2 col-xl-2">
        <NavigationSidebar/>

      </div>
      <div className="row col-8 ">
        <Outlet/>
      </div>

      <div className="row col-2 ">
          <LoginStatus/>
      </div>

    </div>

  );
};


export default Screen;