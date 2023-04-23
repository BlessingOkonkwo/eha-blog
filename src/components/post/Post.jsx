import React from 'react'
import './post.css'

import postImg from '../../assets/images/post-img.jpg'

const Post = () => {
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
        </div>
        <span className="postTitle">Lorem Ipsum Dolor Sit Amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illum obcaecati 
        at delectus architecto placeat non deserunt ipsam enim quasi saepe vel aspernatur 
        sint blanditiis perferendis maxime facilis, ad mollitia? Lorem ipsum dolor sit amet 
        consectetur, adipisicing elit. Quia illum obcaecati 
        at delectus architecto placeat non deserunt ipsam enim quasi saepe vel aspernatur 
        sint blanditiis perferendis maxime facilis, ad mollitia? Lorem ipsum dolor sit amet 
        consectetur, adipisicing elit. Quia illum obcaecati 
        at delectus architecto placeat non deserunt ipsam enim quasi saepe vel aspernatur 
        sint blanditiis perferendis maxime facilis, ad mollitia? 
      </p>
    </div>
  )
}

export default Post
