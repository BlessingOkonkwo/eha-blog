import React from 'react'
import "./sidebar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import sidebarImg from '../../assets/images/sidebar-img.jpg'
import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <div>
            <img 
                src={sidebarImg} 
                alt="" 
                width="100%"
            />
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quasi 
            sequi ex nisi porro similique molestiae natus possimus rerum inventore sit, 
            ad excepturi tempore libero facilis vitae facere quas necessitatibus. Lorem 
            ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quasi 
            sequi ex nisi porro similique molestiae natus possimus rerum inventore sit, 
            ad excepturi tempore libero facilis vitae facere quas necessitatibus.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <FontAwesomeIcon icon={faFacebookSquare} className="sidebarIcon" />
            <FontAwesomeIcon icon={faTwitterSquare} className="sidebarIcon" />
            <FontAwesomeIcon icon={faPinterestSquare} className="sidebarIcon" />
            <FontAwesomeIcon icon={faInstagramSquare} className="sidebarIcon" />
        </div>
      </div>
    </div>
  )
}

export default SideBar
