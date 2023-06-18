import React, { useEffect, useState } from 'react'
import './singlePost.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

const SinglePost = () => {
  const location = useLocation();
  const path = (location.pathname.split("/[2]")[0].split('/')[2]);
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:4000/api/posts/" + path);
      setPost(res.data);
      console.log(res);
    }
    getPost();
  }, [path]);

  console.log('path', path);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div>
          {post.photo && (
            <img 
            src={post.photo}
            alt="" 
            width="100%"
            className="singlePostImg"
            />
          )}
            
        </div>
        <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostEdit">
                <FontAwesomeIcon icon={faPenToSquare} className="singlePostIcon" />
                <FontAwesomeIcon icon={faTrashCan} className="singlePostIcon" />
            </div>
        </h1>

        <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link>
            </span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
            {post.desc}
        </p>
      </div>
    </div>
  )
}

export default SinglePost
