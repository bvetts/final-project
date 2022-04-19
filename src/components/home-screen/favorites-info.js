import React, {useEffect, useRef, useState} from 'react';




import * as service from "../services/auth-service"
import * as serviceF from "../services/favorites-service"//might need diff name??

//enter one from postman for testing??

const FavoritesList = () => {
  const [profile, setProfile] = useState({});


  const [fav, setFav] = useState([])

  const findFavorites = async (username) => {
    const f = await serviceF.favoritesByUser(username);
    setFav(f)
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
const showFavorites = async () =>{
findFavorites(profile.username)
}

  useEffect(async () => {
        const user = await service.profile();
        setProfile(user);


      }, []);

//need to lookup and display title and image isntead of id??
//this might be why we need article in our database
  return (
    <div>
      <h1>Favorites</h1>
      <ul className="list-group">
      {profile.username}
        <button
            onClick={() => showFavorites()}
            className="float-end btn btn-primary">Show Favorites</button>
        {
          fav.map(fav =>
          <li key={fav._id} className="list-group-item">

            {fav.username} {fav.uuid}
          </li>
          )
        }
      </ul>
      <pre>{JSON.stringify(fav, null, 2)}</pre>
    </div>
  );
};

export default FavoritesList;