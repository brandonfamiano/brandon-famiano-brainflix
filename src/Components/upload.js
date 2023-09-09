import React from 'react';
import { Link } from 'react-router-dom';
import NavComponent from './nav';
import "../styles/main.scss";
function Upload() {
  return (
    <div>
        <NavComponent></NavComponent>
        <div className="comment">
          <h3>UPLOAD VIDEO</h3>
          <div className="comment__form">
            <div className="comment__form--name">
              <input type="text" id="name" placeholder="Add a title to your video" />
            </div>
            <div className="comment__form--text">
              <textarea id="comment"  placeholder="Add a description to your video"></textarea>
            </div>
          </div>
          <button id="submit">UPLOAD</button>
          <Link to="/">Cancel</Link>
        </div>
    </div>
  );
}

export default Upload;