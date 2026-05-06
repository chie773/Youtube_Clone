import Navbar from './Component/Navbar/Navbar/navbar'
import Home from './Pages/Home/home'
import './App.css';
import {useState} from 'react'
import {Route,Routes} from 'react-router-dom';
import Video from './Pages/Video/video';
import Profile from './Pages/Profile/profile';



function App() {

  const [sideNavbar,setSideNavbar] = useState(true);

  const setSideNavbarFunc=(value)=> {
    setSideNavbar(value)
  }
  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar}/>
      <Routes>
        <Route path='/' element={<Home sideNavbar={sideNavbar} />} />
        <Route path='/watch/:id' element={<Video />} />
        <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar} />} />

      </Routes>
    </div>
  );
}

export default App;
