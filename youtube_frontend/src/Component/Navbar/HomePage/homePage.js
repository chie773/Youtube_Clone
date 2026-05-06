import React, { useEffect, useState } from 'react'
import './homePage.css'
import { Link } from 'react-router-dom';

const HomePage = ({sideNavbar}) => {
  const options = ["All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming", "Debates", "Coke Studio Pakistan", "Democracy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy", "Pakistani dramas", "Comedy"];

  return (
    <div className={sideNavbar?'homePage':'fullHomePage'}>
      <div className="homePage_options">
        {
          options.map((item, index) => {
            return (
              <div className="homePage_option" key={index}>
                {item}
              </div>
            )
          })
        }
      </div>

      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>

        <Link to={'/watch/9875'} className="youtube_Video">
          <div className="youtube_thumbnailBox">
            <img src="/images/thumbnail1.jpeg"  className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              28:05
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="/images/thumbnail1.jpeg" alt="profile" className="youtube_thumbnail_Profile" />
            </div>
          
            <div className="youtube_TitleBoxTitle">
              <div className="youtube_videoTitle">Best Ways to invest in the stock Market</div>
              <div className="youtube_channelName">User 1</div>
              <div className="youtubeVideo_views">10 views</div>


            </div>
              
          </div>
        </Link>
    
        







      </div>
    </div>
  )
}

export default HomePage