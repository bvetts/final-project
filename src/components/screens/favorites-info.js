import React, {useEffect, useRef, useState} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";


import * as service from "../services/auth-service"
import * as serviceF from "../services/favorites-service"//might need diff name??

//enter one from postman for testing??

const FavoritesList = ({profile}) => {
  //const [profile, setProfile] = useState({});


  const [fav, setFav] = useState([])

console.log(profile._id)
  const findFavorites = async () => {
    const f = await serviceF.favoritesByUser(profile._id);
    setFav(f)
  }
  const deleteF = async (id) =>  {
    await serviceF.deleteFavorite(id);
  }


  //following function not woking yet
  /*
  const deleteFavorite = async (userId) => {
    const status = await service.deleteUser(userId)
    const newUsers = users.filter(user => user._id !== userId)
    setUsers(newUsers)
  }
*/
/*
//use somewhere else later,  modify
 const createFavorite = async () => {
    const newFavorite = {
      username: {profile.username},
      uuid: '1234567',//this is the part that needs to be selected somehow

    }
    const insertedFav = await service.createFavorite(newFavorite)
    const newFavorites = [
      ...fav,
      insertedFav
    ]
    setFavorites(newFavorites)
  }

*/
//const showFavorites = async () =>{
//findFavorites(profile.username)
//}//
 useEffect(async () => {

   findFavorites();

  }, [])

  //useEffect({
        //const user = await service.profile();
        //setProfile(user);
     //   findFavorites()


   //   }, []);

//need to lookup and display title and image isntead of id??
//this might be why we need article in our database
//need the button, aldo have it display hide the button itself??
  return (
    <div>
    <div>
      <button onClick={findFavorites} className="btn btn-primary float">Refresh Favorite Articles</button>
    </div>
      <ul className="list-group">

        {
          fav.map(fav =>
          <li key={fav._id} className="list-group-item">
          <i onClick={() => deleteF(fav._id)} className="fa-solid fa-remove fa-2x fa-pull-left"></i>

                <Link to={`/details/${fav.uuid}`}>





              <div className = " wd-titles d-inline-block">{fav.title}</div>

              </Link>



          </li>
          )
        }
      </ul>

    </div>
  );
};

export default FavoritesList;
//<i onClick={() => deleteF(fav._id)} className="fa-solid fa-remove fa-2x fa-pull-left"></i>
