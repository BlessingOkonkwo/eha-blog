import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../topbar/TopBar'

const Layout = () => {
  return (
    <div>
      <TopBar />
      <Outlet />
    </div>
  )
}

export default Layout
