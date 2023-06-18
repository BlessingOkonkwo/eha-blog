import React from 'react'
import './posts.css'
import Post from '../post/Post'

const Posts = ({posts}) => {
  return (
    <div className="posts">
      {
        posts.map((p, index) => (
          <Post 
            key={index} 
            post={p}
          />
        ))
      }
    </div>
  )
}

export default Posts
