import React, { Component } from 'react';
import "./nav.scss";
import logo from '../assets/logo/logo.svg'

class NavComponent extends Component{
    render(){
        return(
        <nav>
            <div class="nav__container">
                <div class="nav__header">
                    <a href="index.html"><img src={logo} alt="bandsitelogo" width="120px"></img></a>
                </div>
                <div class="nav__select">
                    <a href="../index.html">
                        <div class="nav__select--inactive">
                                Biography
                        </div>
                    </a>   
                    <a href="#shows">
                        <div class="nav__select--active">
                            Shows
                        </div>
                    </a> 
                </div>
            </div>
        </nav>
        );
    }
}
export default NavComponent;