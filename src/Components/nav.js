import React, { Component } from 'react';
import "../styles/nav.scss";
import logo from '../Assets/logo/logo.svg'
import avatar from '../Assets/Images/Mohan-muruge.jpg'
import upload from '../Assets/Icons/upload.svg'
import search from '../Assets/Icons/search.svg'
import { Link } from 'react-router-dom';
class NavComponent extends Component{
    render(){
        return(
        <nav>
            <div className="nav--container">
                <div className="nav--header">
                    <Link to="/"><img src={logo} alt="brainflixlogo" width="150px"></img></Link>
                </div>
                <div className="nav--select">
                        <div className="nav--search">
                                <img className="nav--search__icon" src={search}/>
                                <input type ="text" placeholder="Search" className="nav--search__bar"></input>
                        </div>
                    <img className="nav--avatar"src={avatar} alt="avatar" width="50px"></img>
                    <Link to="/upload">
                        <button className="nav--button">
                            <img src={upload}/>
                            <span className="nav--button__text">UPLOAD</span>
                        </button>
                   </Link>
                </div>
            </div>
        </nav>
        );
    }
}
export default NavComponent;