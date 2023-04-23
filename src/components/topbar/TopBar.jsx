import React from 'react'
import "./topbar.css"
import beeLogo from "../../assets/images/luxury-queen-bee-elegant.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon, solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const TopBar = () => {
    const user = false;
  return (
    <div className="top">
        <div className="topLeft">
            <FontAwesomeIcon icon={faFacebookSquare} className="topIcon" />
            <FontAwesomeIcon icon={faTwitterSquare} className="topIcon" />
            <FontAwesomeIcon icon={faPinterestSquare} className="topIcon" />
            <FontAwesomeIcon icon={faInstagramSquare} className="topIcon" />
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to="/" className="link">HOME</Link>
                </li>
                <li className="topListItem">
                    ABOUT
                </li>
                <li className="topListItem">
                    CONTACT
                </li>
                <li className="topListItem">
                    <Link to="/write" className="link">WRITE</Link>
                </li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <div className="topImageDiv">
                <img 
                    src={beeLogo}
                    alt="logo"
                    className="topImage"
                />
            </div>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            
            <FontAwesomeIcon icon={faMagnifyingGlass} className="topSearchIcon" />
        </div>
    </div>
  )
}

export default TopBar
