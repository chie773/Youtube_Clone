import React, { useState, useEffect } from 'react'
import './video.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';



const Video = () => {
    // const [message, setMessage] = useState("");
    // const [data, setData] = useState(null);
    // const [videoUrl, setVideoURL] = useState("");
    // const { id } = useParams();
    // const [comments, setComments] = useState([]);

    // const fetchVedioById = async () => {
    //     await axios.get(`http://localhost:4000/api/getVideoById/${id}`).then((response) => {
    //         console.log(response.data.video);
    //         setData(response.data.video)
    //         setVideoURL(response.data.video.videoLink)
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    // const getCommentByVideoId = async () => {
    //     await axios.get(`http://localhost:4000/commentApi/comment/${id}`).then((response) => {
    //         console.log(response);
    //         setComments(response.data.comments)
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    // useEffect(() => {
    //     fetchVedioById();
    //     getCommentByVideoId();
    // }, [])

    // const handleComment = async()=>{
    //     const body = {
    //         "message":message,
    //         "video":id
    //     }
    //     await axios.post('http://localhost:4000/commentApi/comment',body, { withCredentials: true }).then((resp)=>{
    //         console.log(resp)
    //         const newComment = resp.data.comment;
    //         setComments([newComment,...comments]);
    //         setMessage("")
    //     }).catch(err=>{
    //         toast.error("Please Login First to comment")
    //     })
    // }
    return (
        <div className='video'>
            <div className='videoPostSection>'>
                <div className='video_youtube'>
                    <video width="400" controls autoPlay className='video_youtube_video'>

                        {/* Put Video Links here */}


                        Your browser does not support the video tag
                    </video>

                </div>

                <div className="video_youtubeAbout">
                    <div className="video_uTubeTitle">{"Best Ways to invest in the stock Market"}</div>

                    <div className="youtube_video_ProfileBlock">
                        <div className="youtube_video_ProfileBlock_left">
                            <Link to={"/User/1"} className='youtube_video_ProfileBlock_left_img' src="/images/thumbnail1.jpeg" />
                            
                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName"> {"data?.user?.channelName"} </div>
                                <div className="youtubePostProfileSubs">{"57"}</div>
                            </div>
                            <div className="subscribeBtnYoutube">Subscribe</div>
                        </div>

                        <div className="youtube_video_likeBlock">
                            <ThumbUpOutlinedIcon />
                            <div className='youtube_video_likeBlock_NoOfLikes'>{32}</div>
                        </div>
                        <div className="youtubeVideoDivider"></div>

                        <div className="youtube_video_likeBlock">
                            <ThumbDownAltOutlinedIcon />
                        </div>

                    </div>

                    <div className="youtube_video_About">
                        <div>{"Cool Video"}</div>
                        <div>{"Cool Desciritpon"}</div>
                    </div>
                </div>

                <div className="youtubeCommentSection">
                    <div className="youtubeCommentSectionTitle">{"{Insert Amount Of Comments}"} Comments</div>

                    <div className="youtubeSelfComment">
                        <img className='video_youtubeSelfCommentProfile' src="/images/thumbnail1.jpeg" />
                        <div className='addAComment'>
                            <input type='text' className='addAcommentInput' placeholder='Add a comment' />

                            <div className='cancelSubmitComment'>
                                <div className="cancelComment">Cancel</div>
                                <div className="cancelComment">Comment</div>
                                

                            </div>


                        </div>

                    </div>

                    <div className="youtubeOthersComments">

                        <div className="youtubeSelfComment">
                            <img className='video_youtubeSelfCommentProfile' src="/images/thumbnail1.jpeg" />
                            <div className="others_commentSectionHeader">
                                <div className="channelName_comment">Username</div>
                                <div className="channelName_comment">2024-09-30</div>
                            </div>

                            <div className="others_comentSectionComment">
                                This is a stupid web app and it should be exasperated
                            </div>


                         </div>
                         

                         <div className="youtubeSelfComment">
                            <img className='video_youtubeSelfCommentProfile' src="/images/thumbnail1.jpeg" />
                            <div className="others_commentSectionHeader">
                                <div className="channelName_comment">Username</div>
                                <div className="channelName_comment">2024-09-30</div>
                            </div>

                            <div className="others_comentSectionComment">
                                This is a stupid web app and it should be exasperated
                            </div>


                         </div>

                         <div className="youtubeSelfComment">
                            <img className='video_youtubeSelfCommentProfile' src="/images/thumbnail1.jpeg" />
                            <div className="others_commentSectionHeader">
                                <div className="channelName_comment">Username</div>
                                <div className="channelName_comment">2024-09-30</div>
                            </div>

                            <div className="others_comentSectionComment">
                                This is a stupid web app and it should be exasperated
                            </div>


                         </div>

                         <div className="youtubeSelfComment">
                            <img className='video_youtubeSelfCommentProfile' src="/images/thumbnail1.jpeg" />
                            <div className="others_commentSectionHeader">
                                <div className="channelName_comment">Username</div>
                                <div className="channelName_comment">2024-09-30</div>
                            </div>

                            <div className="others_comentSectionComment">
                                This is a stupid web app and it should be exasperated
                            </div>


                         </div>
                    




                    </div>
                </div>

            </div>

            <div className="videoSuggestions">

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Video