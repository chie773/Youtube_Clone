import React, { useState, useEffect } from 'react'
import './profile.css';
import SideNavbar from '../../Component/Navbar/SideNavbar/sideNavbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useParams } from 'react-router-dom';

const Profile = ({ sideNavbar }) => {
    // const { id } = useParams();
    // const [data, setData] = useState([]);
    // const [user, setUser] = useState(null);
    // const fetchProfileData = async () => {
    //     {/* Please watch the video for the code} */}

    // }
    // useEffect(() => {
    //     fetchProfileData()
    // }, [])

    return (
        <div className='profile'>
            <SideNavbar sideNavbar={sideNavbar} />
            <div className={sideNavbar ? "profile_page" : "profile_page_inactive"}>

                <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img className='profile_top_section_img' src="" alt="" />
                    </div>
                    <div className="profile_top_section_About">
                        <div className="profile_top_section_About_Name">Chie773</div>
                        <div className="profile_top_section_info">
                            @User1 . 4 Videos
                        </div>

                        <div className="profile_top_section_info">
                            About Section of channel
                        </div>


                    </div>
                </div>

                <div className="profile_videos">
                    <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

                    <div className="profileVideos">
                        <Link to={'/watch/8998'} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className="profileVideo_block_thumbnail_img" src="https://static.vecteezy.com/system/resources/previews/051/261/577/large_2x/person-coding-on-a-laptop-with-vibrant-programming-code-on-the-screen-photo.jpeg" />
                            
                            </div>

                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Biggest Coding Skills You Should Have in 2021</div>
                                <div className="profileVideo_block_detail_about">Created on 2026-01-01</div>

                            </div>
                        </Link>

                        <Link to={'/watch/8999'} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className="profileVideo_block_thumbnail_img" src="https://static.vecteezy.com/system/resources/previews/051/261/577/large_2x/person-coding-on-a-laptop-with-vibrant-programming-code-on-the-screen-photo.jpeg" />
                            
                            </div>

                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Biggest Coding Skills You Should Have in 2021</div>
                                <div className="profileVideo_block_detail_about">Created on 2026-01-01</div>

                            </div>
                        </Link>

                        <Link to={'/watch/9000'} className="profileVideo_block">
                            <div className="profileVideo_block_thumbnail">
                                <img className="profileVideo_block_thumbnail_img" src="https://static.vecteezy.com/system/resources/previews/051/261/577/large_2x/person-coding-on-a-laptop-with-vibrant-programming-code-on-the-screen-photo.jpeg" />
                            
                            </div>

                            <div className="profileVideo_block_detail">
                                <div className="profileVideo_block_detail_name">Biggest Coding Skills You Should Have in 2021</div>
                                <div className="profileVideo_block_detail_about">Created on 2026-01-01</div>

                            </div>
                        </Link>
                    </div>
                    


                </div>
            </div>

        </div>
    )
}

export default Profile