import Navbar from './Component/Navbar/Navbar/navbar'
import Home from './Pages/Home/home'
import './App.css';
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import VideoUpload from './Pages/VideoUpload/videoUpload';




function App() {

  const [sideNavbar,setSideNavbar] = useState(true);

  const setSideNavbarFunc=(value)=> {
    setSideNavbar(value)
  }
  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar}/>
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
        <Route path="/upload" element={<VideoUpload />} />
      </Routes>
    </div>
  );
}

export default App;
