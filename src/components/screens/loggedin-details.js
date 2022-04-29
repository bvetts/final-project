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
        <div>
          <h5>Hello {profile.username}</h5>

          <CreateFavorite profile={profile} uuid = {uuid} title = {title}/>
        </div>

        <div className="pt-2">
            <CommentList profile={profile} uuid = {uuid} title = {title} />
        </div>

    </div>
  );
  }

else{
return (
    <div>
      <h4 className="text-info">Log In to See Comments or Favorite This Article</h4>

      <Link className="btn btn-success" to="/login">Login</Link>


    </div>
  );

}

};

export default ArticleDetails;