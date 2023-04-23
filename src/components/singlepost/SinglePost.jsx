import React from 'react'
import './singlePost.css'

import postImg from '../../assets/images/post-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div>
            <img 
                src={postImg}
                alt="" 
                width="100%"
                className="singlePostImg"
            />
        </div>
        <h1 className="singlePostTitle">
            Lorem Ipsum Dolor Sit Amet.
            <div className="singlePostEdit">
                <FontAwesomeIcon icon={faPenToSquare} className="singlePostIcon" />
                <FontAwesomeIcon icon={faTrashCan} className="singlePostIcon" />
            </div>
        </h1>

        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Blessing</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid 
            cupiditate aperiam in quo neque explicabo quae fugit error. Nemo, dolores 
            amet commodi culpa voluptatum vero nostrum. Deserunt, accusamus est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid 
            cupiditate aperiam in quo neque explicabo quae fugit error. Nemo, dolores 
            amet commodi culpa voluptatum vero nostrum. Deserunt, accusamus est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid 
            cupiditate aperiam in quo neque explicabo quae fugit error. Nemo, dolores 
            amet commodi culpa voluptatum vero nostrum. Deserunt, accusamus est!
        </p>
      </div>
    </div>
  )
}

export default SinglePost
