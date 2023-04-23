import React from 'react'
import './write.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import postImg from "../../assets/images/post-img.jpg"

const Write = () => {
  return (
    <div className="write">
        <img src={postImg} alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <FontAwesomeIcon className="writeIcon" icon={faPlus} />
            </label>
            <input type="file" id="fileInput" style={{display: "none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea
            name="" 
            id="" 
            cols="30" 
            rows="10"
            className="writeInput writeText"
            type="text"
            placeholder="Tell Your Story..."
            >

            </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write
