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
            <div class="nav--container">
                <div class="nav--header">
                    <a href="index.html"><img src={logo} alt="brainflixlogo" width="150px"></img></a>
                </div>
                <div class="nav--select">
                        <div class="nav--search">
                                <img class="nav--search__icon" src={search}/>
                                <input type ="text" placeholder="Search" class="nav--search__bar"></input>
                        </div>
                    <img class="nav--avatar"src={avatar} alt="avatar" width="50px"></img>
                    <Link to="/upload">
                        <button class="nav--button">
                            <img src={upload}/>
                            <span class="nav--button__text">UPLOAD</span>
                        </button>
                   </Link>
                </div>
            </div>
        </nav>
        );
    }
}
export default NavComponent;