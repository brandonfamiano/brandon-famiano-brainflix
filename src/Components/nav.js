import React from "react";
import DOMPurify from "dompurify";
import "./nav.scss";

const nav = `
<nav>
<div class="nav__container">
    <div class="nav__header">
        <a href="index.html"><img src="../../assets/logo/BrainFlix-logo.svg" alt="bandsitelogo" width="120px"></a>
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
`;

const sanitizedNav = DOMPurify.sanitize(nav);

const NavComponent = () => {
  return <div dangerouslySetInnerHTML={{ __html: sanitizedNav }} />;
};

export default NavComponent;