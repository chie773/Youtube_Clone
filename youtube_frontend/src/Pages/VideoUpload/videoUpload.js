import React, { useState,useEffect } from 'react'
import './videoUpload.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const VideoUpload = () => {
    const [inputField, setInputField] = useState({ "title": "", "description": "", "videoLink": "", "thumbnail": "", "videoType": "" })
    const [loader ,setLoader] = useState(false);
    const navigate = useNavigate()
    const handleOnChangeInput = (event, name) => {
        setInputField({
            ...inputField, [name]: event.target.value
        })
    }

    const uploadImage = async (e, type) => {
        setLoader(true)
        console.log("Uploading")
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        // youtube-clone
        data.append('upload_preset', 'youtube-clone');
        try {
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/daargosdm/auto/upload`,
                data
            );

            const uploadedUrl = res.data.secure_url;

            if (type === 'image') {
                setInputField(prev => ({ ...prev, thumbnail: uploadedUrl }));
            } else {
                setInputField(prev => ({ ...prev, videoLink: uploadedUrl }));
            }

            setLoader(false);
        } catch (err) {
            setLoader(false)
            console.log(err)
        }


    }
    
    useEffect(()=>{
        let isLogin = localStorage.getItem("userId");
        if(isLogin===null){
            navigate('/')
        }
    },[])
    console.log(inputField)
    const handleSubmitFunc = async()=>{
        const userId = localStorage.getItem('userId');
        try {
            await axios.post('http://localhost:5000/api/videos', {
                title: inputField.title,
                description: inputField.description,
                videoLink: inputField.videoLink,
                thumbnail: inputField.thumbnail,
                userId: userId,
            });
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    

    return (
        <div className='videoUpload'>
            <div className="uploadBox">
                <div className="uploadVideoTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
                    Upload Video
                </div>

                <div className="uploadForm">
                    <input
                        type="text"
                        placeholder="Title"
                        className="uploadInput"
                        onChange={(e) => handleOnChangeInput(e, 'title')}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="uploadInput"
                        onChange={(e) => handleOnChangeInput(e, 'description')}
                    />
                    <label>Thumbnail Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => uploadImage(e, 'image')}
                    />
                    <label>Video File</label>
                    <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => uploadImage(e, 'video')}
                    />

                    {
                    loader && <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                    }
                </div>

                
                

                <div className="uploadBtns">
                    <div className="uploadBtn-form" onClick={handleSubmitFunc}>Upload</div>
                    <Link to={'/'} className="uploadBtn-form">Home</Link>
                </div>

            </div>
        </div>
    )
}

export default VideoUpload