import React from 'react'
import SideNavbar from '../../Component/Navbar/SideNavbar/sideNavbar'
import HomePage from '../../Component/Navbar/HomePage/homePage'
import './home.css'
const Home = ({sideNavbar}) => {
  return (
    <div className='home'>
        <SideNavbar sideNavbar={sideNavbar}/>
        <HomePage />

    </div>
  )
}

export default Home