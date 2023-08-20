import React, { useState, useEffect } from 'react';
import videosData from '../Data/video-details.json'; // Update the path to your video-details.json
import "../styles/main.scss";

const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(videosData[0]);
  const [commentArray, setCommentArray] = useState([]);
  const [newName, setNewName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const formatDate = (timestamp) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    // Comment initialization logic goes here if needed
  }, []);

  const addComment = () => {
    if (!newName || !newCommentText) {
      // Handle error, return early
      return;
    }

    const newComment = {
      image: "/assets/images/Mohan-muruge",
      name: newName,
      datePosted: "posted Now",
      comment: newCommentText,
    };

    setCommentArray([...commentArray, newComment]);
    setNewName('');
    setNewCommentText('');
  };

  return (
    <div className="video-player">
      <div className="main-video">
        <video controls width="100%">
          <source src={selectedVideo.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-description">
          <div className="thumbnail">
            <img src={selectedVideo.image} alt={selectedVideo.title} />
          </div>
          <div className="video-info">
            <h2>{selectedVideo.title}</h2>
            <p>Channel: {selectedVideo.channel}</p>
            <p>Views: {selectedVideo.views}</p>
            <p>Likes: {selectedVideo.likes}</p>
            <p>Date Posted: {formatDate(selectedVideo.timestamp)}</p>
            <p>{selectedVideo.description}</p>
          </div>
        </div>
        <div className="comment__form">
          <h3>JOIN THE CONVERSATION</h3>
          <div className="comment__form-inputs">
            <div className="comment__form-name">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Your Name" />
            </div>
            <div className="comment__form-text">
              <label htmlFor="comment">Comment</label>
              <textarea id="comment" value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} placeholder="Add a comment"></textarea>
            </div>
          </div>
          <button id="submit" onClick={addComment}>COMMENT</button>
        </div>
      </div>
      <div className="video-list">
        {videosData
          .filter(video => video !== selectedVideo) // Exclude the selected main video
          .map((video) => (
            <div key={video.id} className="video-item" onClick={() => handleVideoSelect(video)}>
              <img src={video.image} alt={video.title} />
              <p className="title">{video.title}</p>
              <p className="artist">{video.artist}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
