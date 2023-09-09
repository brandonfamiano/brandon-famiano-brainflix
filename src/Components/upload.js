import React from 'react';
import { Link } from 'react-router-dom';
import NavComponent from './nav';
import "../styles/upload.scss";
import upload from '../Assets/Icons/upload.svg'
import thumbnail from'../Assets/Images/Mohan-muruge.jpg'
function Upload() {
  return (
    <div>
        <NavComponent></NavComponent>
        <span>
            <img class = "thumbnail" src={thumbnail }></img>
        </span>
        <div className="upload">
          <h3>UPLOAD VIDEO</h3>
          <div className="upload__form">
            <div className="upload__form--name">
              <input type="text" id="name" placeholder="Add a title to your video" />
            </div>
            <div className="upload__form--text">
              <textarea id="upload"  placeholder="Add a description to your video"></textarea>
            </div>
          </div>
          <button className="nav--button">
            <img src={upload}/>
            <span className="nav--button__text">UPLOAD</span>
            </button>
          <Link to="/">Cancel</Link>
        </div>
    </div>
  );
}

export default Upload;