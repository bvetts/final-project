import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/bootstrap/fontawesome/css/all.min.css';


import {BrowserRouter, Route , Routes } from "react-router-dom";

import Home from "./components/home-screen";
//import Login from "./components/login-screen";
//import Profile from "./components/profile-screen";
import Login from "./components/users/login-screen";
import Signup from "./components/users/signup-screen";
import Profile from "./components/users/profile-screen";
import OtherProfile from "./components/users/other-profiles";
import EditProfile from "./components/users/edit-profile";


import Screen from "./components";

//import UserList from "./components/users/user-list";

import ArticleSearch from "./components/screens/search-screen";
import ArticleDetails from "./components/screens/details-screen";
import AllComments from "./components/screens/all-comments";
import ArticleList from "./components/screens/articles-view";
import ArticleDetail from "./components/screens/article-details.js";
import Orgs from "./components/screens/org-screen";

function App() {
 return (
   <BrowserRouter>
    <div className="container">
      <Routes>
               <Route path="/" element={<Screen/>}>
                  <Route path="search" element={<ArticleSearch/>}/>
                  <Route path="search/:movieSearch" element={<ArticleSearch/>}/>
                  <Route path="details/:uuid" element={<ArticleDetails/>}/>

                 <Route index element={<Home/>} />

                 <Route path="home" element={<Home/>}/>

                 <Route path="profile" element={<Profile/>}/>
                 <Route path="profile/:id" element={<OtherProfile/>}/>
                 <Route path="edit/:id" element={<EditProfile/>}/>


                 <Route path="register" element={<Signup/>}/>
                 <Route path="login" element={<Login/>}/>
                 <Route path="comments" element={<AllComments/>}/>
                 <Route path="article" element={<ArticleList/>}/>
                 <Route path="article/:topic" element={<ArticleDetail/>}/>

                 <Route path="partners" element={<Orgs/>}/>



                 </Route>

      </Routes>
    </div>
   </BrowserRouter>
 );
}



export default App;
