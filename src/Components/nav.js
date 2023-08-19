import React, { Component } from 'react';
import "./nav.scss";
import logo from '../assets/logo/logo.svg'
import avatar from '../assets/images/Mohan-muruge.jpg'
import upload from '../assets/icons/upload.svg'
import search from '../assets/icons/search.svg'
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
                    <a href="#">
                        <button class="nav--button">
                            <img src={upload}/>
                            <span class="nav--button__text">UPLOAD</span>
                        </button>
                    </a> 
                </div>
            </div>
        </nav>
        );
    }
}
export default NavComponent;