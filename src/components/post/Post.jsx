import React from 'react'
import './post.css'
import { Link } from 'react-router-dom'
import postImg from '../../assets/images/post-img.jpg'

const Post = ({post}) => {
  return (
    <div className="post">
      <div>
        <img 
            src={postImg} 
            alt="postImg"
            className="postImg"
        />
      </div>

      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
            {
              post.categories.map((c, i) => (
                <span key={i} className="postCat">{c.name}</span>
              ))
            }
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        {/* <span className="postTitle">{post.title}</span> */}
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  )
}

export default Post
