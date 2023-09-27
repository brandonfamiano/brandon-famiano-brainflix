import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavComponent from './nav';
import "../styles/upload.scss";
import upload from '../Assets/Icons/upload.svg';
import thumbnail from '../Assets/Images/Mohan-muruge.jpg';
let videoAPI = "https://project-2-api.herokuapp.com/videos?api_key=c2e6a793-f014-4ae3-8642-44c624ee5be2";
function Upload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const navigate = useNavigate();

  const handleUpload = () => {
    const videoData = {
      title: title,
      description: description,
    };

    axios.post(videoAPI, videoData) 
      .then((response) => {
        console.log('Video uploaded successfully!', response.data);
        setUploadedVideo(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error uploading video:', error);

      });
  };

  return (
    <div>
      <NavComponent></NavComponent>
      <span>
        <img className="thumbnail" src={thumbnail} alt="Thumbnail" />
      </span>
      <div className="upload">
        <h3>UPLOAD VIDEO</h3>
        <div className="upload__form">
          <div className="upload__form--name">
            <input
              type="text"
              id="name"
              placeholder="Add a title to your video"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="upload__form--text">
            <textarea
              id="upload"
              placeholder="Add a description to your video"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <Link to="/">
          <button className="nav--button" onClick={handleUpload}>
            <img src={upload} alt="Upload" />
            <span className="nav--button__text">UPLOAD</span>
          </button>
        </Link>
        <Link to="/">Cancel</Link>
      </div>
      {uploadedVideo && (
        <div>
          <h4>Uploaded Video</h4>
          <p>Title: {uploadedVideo.title}</p>
          <p>Description: {uploadedVideo.description}</p>
        </div>
      )}
    </div>
  );
}

export default Upload;
