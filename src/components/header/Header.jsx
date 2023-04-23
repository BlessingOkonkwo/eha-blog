import React from 'react'
import "./header.css"
import headerImage from '../../assets/images/header-image-2.jpg'

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>

      <div>
        <img className="headerImg" 
        src={headerImage} 
        alt="header pic" 
        // width="100%"
        />
      </div>
    </div>
  )
}

export default Header
