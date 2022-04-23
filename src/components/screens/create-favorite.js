import React, {useEffect, useRef, useState} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";


import * as service from "../services/auth-service"
import * as serviceF from "../services/favorites-service"//might need diff name??

//enter one from postman for testing??

const CreateFavorite = ({profile, uuid, title}) => {
  //const [profile, setProfile] = useState({});
//how to check if favorite already exists??
//const {uuid} = useParams()

  const [fav, setFav] = useState({})

    console.log("create" )
    console.log(profile._id)
    console.log(uuid)
    console.log(title)

     fav.userID = profile._id
     fav.uuid = uuid
     fav.title = title


  const createFavorite = async () => {
    setFav({...fav,
       userID: profile._id,
       uuid : uuid,
       title: title

       })

     await serviceF.createFavorite (fav);

  }
  //option to remove on details screen too? maybe messing with display/hide
  //search for if exists to set display/hide??
  const deleteF = async (id) =>  {
    await serviceF.deleteFavorite(id);
  }


 useEffect(() => {



  }, [])


//need to lookup and display title and image isntead of id??
//this might be why we need article in our database
//need the button, aldo have it display hide the button itself??

  return (
    <div>
    <div>
      <h1>Favorites</h1>
      <button
          onClick={createFavorite}
          className="btn btn-primary float-end"> Favorite Article</button>
        </div>


    </div>
  );



};


export default CreateFavorite;
//<i onClick={() => deleteF(fav._id)} className="fa-solid fa-remove fa-2x fa-pull-left"></i>
