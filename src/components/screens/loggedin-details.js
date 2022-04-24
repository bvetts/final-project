import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Preformatted from "../../utils/pre";
import {Link} from "react-router-dom";
import FavoritesList from "./favorites-info.js";
import CreateFavorite from "./create-favorite.js"
import CommentList from "./comments-list.js"
//allow a logged in user to favorite article here
//allow a logged in journalist to post comments here

const ArticleDetails = ({profile, uuid, title}) => {

console.log("loggedin")
console.log({profile})
console.log(profile.username)
console.log(uuid)
console.log(title)

if (profile.username){
  return (
    <div>
      <h3>{profile.username}</h3>
      <CreateFavorite profile={profile} uuid = {uuid} title = {title}/>
      <CommentList profile={profile} uuid = {uuid} title = {title} />


     have a favorite button here?? maybe need to also send article id from previous screen
     for creating favorites

      this only displays when logged in, otherwise its is undefined

        nest an additional screen for making and displaying or only displaying comments

    <div >
        add a function here to create a favorite. button needs to be removed if already favorited
    </div>
    <div >
        add a function to create comments. only to be seen by journalist role
    </div>
    <div >
        add a function to see comments. seen by everyone if someone is logged in
    </div>


    </div>
  );
  }

else{
return (
    <div>
      <h4>Log in to see comments or to favorite this article</h4>

      <Link className="btn btn-primary btn-block rounded-pill" to="/login">Login</Link>


    </div>
  );

}

};

export default ArticleDetails;