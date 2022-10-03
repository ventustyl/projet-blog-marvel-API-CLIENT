import React, { useContext, useEffect, useState } from 'react'
import Edit from '../img/editer.png'
import Suppr from '../img/corbeille.png'

import { Link, useLocation } from 'react-router-dom'
import Menu from '../components/Menu'
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation()

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);


  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        const res = await axios.get(`/post/${postId}`);
        setPost(res.data);
        
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className='single'>
      <div className='content'>
        <img src={post?.img} alt='A venir'></img>
        <div className='user'>
          <img src='https://media.gqmagazine.fr/photos/5e183bb99e475600085b06e9/16:9/w_1280,c_limit/thanos-bebe-marvel.jpg' alt=''></img>
          <div className='info'>
            <span>{post.pseudo}</span>
            <p>Posté il y a {moment(post.creation).fromNow()}</p>
          </div>
       
           {currentUser?.pseudo=== post.pseudo ?
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
              <img src={Edit} alt="editer" />
            </Link>
            <img src={Suppr} alt="supprimer" />
          </div> : <></>
           }
            </div>
        <h1>{post.titre}</h1>
        <p>{
          post.description
        }</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
