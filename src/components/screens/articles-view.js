import React, {useEffect, useRef, useState} from 'react';

import {Link, useNavigate, useParams} from "react-router-dom";


import * as service from "../services/auth-service"
import * as serviceA from "../services/article-service"//

//may need a refresh comment button

const ArticleList = () => {

const [profile, setProfile] = useState({});
  useEffect(async () => {
    const user = await service.profile();
    setProfile(user);
    findArticles();

  }, []);

const [artlist, setArtlist] = useState([])


  const findArticles = async () => {
    const c = await serviceA.findAllTuits();
    setArtlist(c);

  }


  const artButton = async () => {
          findArticles();



   }

const [newComment, setNewComment] = useState({});

     newComment.userID = profile._id
     newComment.uuid = (new Date()).getTime() +5+ '';
     //newComment.title = title//title needs to be writable like comment
     newComment.author = profile.username
     newComment.org = profile.org

const writeComment = async () =>{
    setNewComment({...newComment,
       userID: profile._id,
       uuid : (new Date()).getTime() +5+ '',
       org:profile.org,
       author:profile.username

       })
    serviceA.createTuit(newComment);

    findArticles();
}



//add  username somehow?? add it into the database originally?
if (profile.role=="journalist"){
  return (
    <div>
    <div >
      <h2 className="text-success">Write an Article</h2>

      <div className = 'pb-2'>
      <div className="text-white">Title:</div>
                 <input className = "wd-commentBox" type="title" placeholder="Article Title" onChange={(e) =>
                           setNewComment({...newComment,
                             title: e.target.value})}/>
            <div className="text-white pt-1">Article:</div>
           <textarea className="wd-commentBox pb-5" placeholder="Write an Article" onChange={(e) =>
                setNewComment({...newComment,
                  content: e.target.value})}></textarea>
          <div className="text-white">Topic Tag:</div>
                     <input  className="wd-commentBox" placeholder="Topic" onChange={(e) =>
                          setNewComment({...newComment,
                            topic: e.target.value})}></input >


          <button className="btn btn-info btn-block btn-sm float-end " onClick={writeComment}>Post Article</button>

        </div>



    </div>
    <div className = 'pt-5'>
    <h2 >Articles by Our Journalists</h2>
    <button id="fc" className="btn btn-info btn-block btn-sm  " onClick={artButton}>Refresh Articles</button>

        <div className="pt-2">
      <ul className="list-group">

        {
          artlist.map(artlist =>
          <li key={artlist._id} className="list-group-item">



              <h5 >{artlist.title}</h5>
              By: <Link to={`/profile/${artlist.userID}`}>{artlist.author}</Link><br/>
              <div className="wd-commentContainer">
                <div className="text-success">{artlist.content}</div>
                <div className="text-info">Topic: <Link to={`/article/${artlist.topic}`}>{artlist.topic}</Link><br/></div>

                 <div className="text-info"> Partner: <Link className="ml-2"to={`/partners`}> {artlist.org}</Link><br/></div>
              </div>


          </li>
          )
        }
      </ul>
      </div>
      </div>

    </div>
  );
  }
else{

return (
    <div>

        <div className = ''>
        <h3  >Articles by Our Journalists</h3>
        <button id="fc" className="btn btn-info btn-block btn-sm  " onClick={artButton}>Refresh Articles</button>

            <div className="pt-2">
          <ul className="list-group">

            {
                      artlist.map(artlist =>
                      <li key={artlist._id} className="list-group-item">



                          <h5 >{artlist.title}</h5>
                          By: <Link to={`/profile/${artlist.userID}`}>{artlist.author}</Link><br/>
                          <div className="wd-commentContainer">
                            <div className="text-success">{artlist.content}</div>
                            <div className="text-info">Topic: <Link to={`/article/${artlist.topic}`}>{artlist.topic}</Link><br/></div>

                             <div className="text-info"> Partner: <Link className="ml-2"to={`/partners`}> {artlist.org}</Link><br/></div>
                          </div>


                      </li>
                      )
                    }
          </ul>
          </div>
          </div>

        </div>
  );



}


};

export default ArticleList ;
//<Link to={`/article/${artlist._id}`}>{artlist.title}</Link>