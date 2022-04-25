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
    findFavorites();
  }
  const favButton = async () => {
      findFavorites();
      var element = document.getElementById("div");
      element.style.display = "none";

    }

 useEffect(async () => {

   findFavorites();

  }, [])
if(profile.role==="general"){
  return (
    <div>
    <h5 className="text-success">Favorite Articles:</h5>

    <div>
      <button id="div" onClick={favButton} className="btn btn-info float">Show Favorite Articles</button>
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
  }
 else{
 return (
     <div>

     </div>
   );

 }
};

export default FavoritesList;
//<i onClick={() => deleteF(fav._id)} className="fa-solid fa-remove fa-2x fa-pull-left"></i>
