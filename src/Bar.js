import React from "react";
import './index.css';
import './Bar.css';
import NavButtons from "./NavButtons";
import {NavLink} from "react-router-dom";

function Bar () {

  return(
      <div className='common-container flex'>
        <nav className='flex bar-nav'>
          <NavLink to={'/'} className='flex' id='logo-nav'>
            <img src={require('./assets/LogoBlanco.png')} alt='logo'/>
            <div>
              <h2 id='logo-big'>THE BIG</h2>
              <h2>WALRUS</h2>
            </div>
          </NavLink>
          <ul className='flex'>
            <li><a  id='home-a' href='instagram.com'>HOME</a></li>
            <li><a href='instagram.com'>ABOUT US</a></li>
            <li><a href='instagram.com'>ROAD MAP</a></li>
            <li><a href='instagram.com'>GALLERY</a></li>
            <li><a href='instagram.com'>FAQ</a></li>
          </ul>
          <div className='nav-buttons'>
            <NavButtons />
          </div>
        </nav>
        <div className='banner-container'>
          <img src={require('./assets/insideWalrusBar-min.jpg')} alt='banner'/>
        </div>
      </div>
  )
}

export default Bar