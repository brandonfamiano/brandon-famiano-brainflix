import React, { useState, useEffect } from 'react';
import axios from 'axios';
import viewslogo from '../Assets/Icons/views.svg';
import likeslogo from '../Assets/Icons/likes.svg';
import "../styles/main.scss";



let videoAPI = "https://project-2-api.herokuapp.com/videos";

const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(videosData[0]);
  const [commentArray, setCommentArray] = useState([
    {
      image: "",
      name: "Connor Walton",
      comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reference. Let us appreciate this for what it is and what it contains.",
      datePosted: "3 days ago"
    },
    {
      image: "",
      name: "Emilie Beach",
      comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      datePosted: "5 days ago"
    },
    {
      image: "",
      name: "Miles Acosta",
      comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't Get enough.",
      datePosted: "5 days ago"
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const formatDate = (timestamp) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

  const addComment = () => {
    if (!newName || !newCommentText) {
      return;
    }

    const newComment = {
      image: "/Assets/Images/Mohan-muruge.jpg",
      name: newName,
      datePosted: "posted Now",
      comment: newCommentText,
    };

    setCommentArray([...commentArray, newComment]);
    setNewName('');
    setNewCommentText('');
  };

  return (
    <div class="video">
      
      <div class="video__main">
        <video controls width="100%" poster={selectedVideo.image}>
          <source src={selectedVideo.videoUrl} type="video/mp4" />
        </video>
        </div>
        <div class="wrapper">
        <div class="description">
          <div class="description__info">
            <h2>{selectedVideo.title}</h2>
            <span>By: {selectedVideo.channel}</span>
            <p><img src={viewslogo}></img>Views: {selectedVideo.views}</p>
            <p>{formatDate(selectedVideo.timestamp)}</p>
            <p><img src={likeslogo}></img>Likes: {selectedVideo.likes}</p>
            <div>{selectedVideo.description}</div>
          </div>
        </div>
        <div class="comment">
          <h3>JOIN THE CONVERSATION</h3>
          <div class="comment__form">
            <div class="comment__form--name">
              <input type="text" id="name" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Your Name" />
            </div>
            <div class="comment__form--text">
              <textarea id="comment" value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} placeholder="Add a comment"></textarea>
            </div>
          </div>
          <button id="submit" onClick={addComment}>COMMENT</button>
        </div>
        <div class="comment__container">
        {commentArray.map((comment, index) => (
          <div key={index} class="comment__container--item">
            <h3>{comment.name}</h3>
            <h4>{comment.datePosted}</h4>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
      <div class="videolist">
        {videosData
          .filter(video => video !== selectedVideo)
          .map((video) => (
            <div key={video.id} class="videolist__item" onClick={() => handleVideoSelect(video)}>
              <img src={video.image} alt={video.title} />
              <p class="title">{video.title}</p>
              <p class="artist">{video.artist}</p>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
