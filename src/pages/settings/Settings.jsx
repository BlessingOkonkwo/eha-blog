import React from 'react'
import "./settings.css"
import SideBar from '../../components/sidebar/SideBar'

import setImage from "../../assets/images/BLESSING.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
                <img src={setImage} alt="" />
                <label htmlFor="fileInput">
                    <FontAwesomeIcon className="settingsPPIcon" icon={faCircleUser} />
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} />
            </div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Blessing" />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="blessing@gmail.com" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  )
}

export default Settings
