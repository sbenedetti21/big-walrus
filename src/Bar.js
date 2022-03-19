import React from "react";
import './index.css';
import './Bar.css';
import NavButtons from "./NavButtons";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

function Bar () {

  return(
      <motion.div
          initial={{opacity: 0, y: "-2%"}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 0}}

          className='common-container flex'>
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
        <div id='below-banner'>
          <h1>BUY A WALRUS</h1>
          <p>The initial sale has sold out. To get your Walrus, check out the collection on OpenSea</p>
          <a id='button-buy' href='https://opensea.io'>BUY A WALRUS ON OPENSEA</a>
        </div>
        <br/>
        <div className='separator'/>
        <div className='flex' id='second-section'>
          <img src={require('./assets/photo_2022-03-18_21-21-42.jpg')} alt='walrus-02'/>
          <div>
            <h2>THE BIG</h2>
            <h2 id='walrus'>WALRUS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus metus eu in eleifend. Tincidunt varius
              ultricies consequat aliquam consequat in dolor maecenas. Risus egestas sit pharetra tortor. Suscipit arcu
              nunc id fermentum tempus.<br />
              Risus egestas sit pharetra tortor. Suscipit arcu nunc id fermentum. Risus egestas sit pharetra
              tortor. Suscipit arcu nunc id fermentum tempus.Risus egestas.
            </p>
          </div>
        </div>
        <div className='separator'/>
      </motion.div>
  )
}

export default Bar