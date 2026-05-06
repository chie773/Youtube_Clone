import React, { useState,useEffect } from 'react'
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { Link , useNavigate} from 'react-router-dom';
import Login from '../../Login/login';
import axios from 'axios'

const Navbar = ({setSideNavbarFunc, sideNavbar}) => {
  const [userPic,setUserPic] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain")
  const [navbarModal, setNavbarModal] = useState(false);
  const [login,setLogin] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const navigate = useNavigate();


  const handleClickModal = ()=> {
    setNavbarModal(prev=>!prev);
  }

  const sideNavbarFunc= ()=> {
    setSideNavbarFunc(!sideNavbar);
  }

  const handleProfile= ()=> {
    let userId = localStorage.getItem("userId")
    navigate(`/user/${userId}`);
    setNavbarModal(false);
  }

  const setLoginModal=()=>{
    setLogin(false);
  }

  useEffect(() => {
    let userProfilePic = localStorage.getItem("userProfilePic");
    setIsLoggedIn(localStorage.getItem("userId") !== null ? true : false);
    if (userProfilePic !== null) {
      setUserPic(userProfilePic)
    }

  }, [])

  const onclickOfPopUpOption =(button)=>{
    setNavbarModal(false);

    if(button==="login"){
      setLogin(true);
    }else{
      localStorage.clear();
      getLogoutFun();
      setTimeout(() => {
        navigate('/')
        window.location.reload();
    }, 2000);
    }
  }

  const getLogoutFun = async()=>{
    axios.post("http://localhost:4000/auth/logout",{},{ withCredentials: true}).then((res)=>{
      console.log("Logout")
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <div className='navbarHamberger' onClick={sideNavbarFunc}>
          <MenuIcon sx={{ color:"white"}} />
        </div>
          

        <Link to={"/"} className="navbar_youtubeImg">
          <YouTubeIcon sx={{ fontsize: "34px" }} className='navbar_youtubeImage' />
          <div className='navbar_youtubeTitle'>ChiTube</div>
        </Link>

      </div>

      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input type='text' placeholder='Search' className='navbar_searchBoxInput' />
          <div className='navbar_searchIconBox'><SearchIcon sx={{ fontsize: '28px', color:'white' }}></SearchIcon></div>
        </div>

        <div className='navbar_mike'>
          <KeyboardVoiceIcon sx={{color:'white'}}/>
        </div>
      </div>

      <div className='navbar-right'>
        <Link to={'/10/upload'}>
          <VideoCallIcon sx={{ fontsize: "30px", cursor:"pointer", color:'white'}} />
        </Link>
        
        <NotificationsIcon sx={{ fontsize: "30px", cursor:"pointer", color:'white'}} />
        <img onClick={handleClickModal} src={userPic} className='navbar-right-logo' alt='Logo' />

        { navbarModal &&
        <div className='navbar-modal'>
          {isLoggedIn && <div className='navbar-modal-option' onClick={handleProfile}> Profile </div>}
          {isLoggedIn && <div className='navbar-modal-option' onClick={()=> onclickOfPopUpOption("logout")}> Logout </div>}
          {!isLoggedIn && <div className='navbar-modal-option' onClick={()=> onclickOfPopUpOption("login")}> Login </div>}
        </div>
        }

      </div>

      { 
      login && <Login setLoginModal={setLoginModal}/>
      }
    </div>
  )
}

export default Navbar


