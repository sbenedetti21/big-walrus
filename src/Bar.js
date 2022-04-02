import React from "react";
import './index.css';
import './Bar.css';
import NavButtons from "./NavButtons";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import Footer from "./Footer";
import * as Icons from "@material-ui/icons";

function Bar () {

  return(
    
      <motion.div
          initial={{opacity: 0, y: "-2%"}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 0}}
        className='common-container flex'>

       
        <nav className='flex bar-nav' >

         <div className="botonWalrus" >
            <NavLink to={'/'} className='flex' id='logo-nav'>
              <img src={require('./assets/Logotrasnparente.png')} alt='logo' id="centrar-img"/>
              <div>
                <h2 id='logo-big'>THE BIG</h2>
                <h2 id='walerus'>WALRUS</h2>
              </div>
            </NavLink>
          </div>

          <ul className='flex'>
            <li><a  id='home-a' href='#home-a'>HOME</a></li>
            <li><a href='#first-section'>ABOUT US</a></li>
            <li><a href='#second-section'>ROAD MAP</a></li>
            <li><a href='#images'>MINI GALLERY</a></li>
            <li><a href='#third-section'>FAQ</a></li>
            <li><div><a href='https://opensea.io/collection/thebigwalerus-store/' target='_blank' rel="noreferrer"><f >BUY A WALRUS</f></a></div></li>
          </ul>
          <div className='nav-buttons'>
            <NavButtons />
          </div>

        </nav>

        <div className='banner-container'>
 
          <img src={require('./assets/insideWalrusBar-min.jpg')} alt='banner'/>

        </div>
        <div id='below-banner'>
          <h1>DISCOVER OUR PROJECT</h1>
          <p id='padding'>
          <j id="subtituloPrincipal"> There are no bonding curves here. Buying a Big Walrus costs <f id= 'SoloEnNegrita'> 0.3 SOL </f>. <f id="colorNaranja">(There are no whitelists or pre-sales, <f id= 'SoloEnNegrita'> everyone can participate</f>)</f></j>
          </p>
        </div>
        <br/>
        <div className='separator'/>
        <div className='flex' id='first-section'>
          <img src={require('./assets/gifPrincipal.gif')} alt='walrus-02' id= "picture1"/>
          <div>
            <h2>THE BIG</h2>
            <h2 id='walrus'>WALRUS</h2>

            <p id='ProgetDefinition'> 
            <a id= 'SoloEnNegrita'>The Big Walrus (TBW)</a> is a collection of Non-Fungible Tokens living on Solana blockchain, punlish on OpenSea. <br />
            NFTs are <a id= 'SoloEnNegrita'> immutable and forever </a>. We only have one chance to do it right, so we obsess over  <a id= 'SoloEnNegrita'> quality </a> and review all  <a id= 'SoloEnNegrita'> details </a>.
            That's why we decided to make each Big Walrus NFT by hand in a completely  <a id= 'SoloEnNegrita'> handmade </a> way , making The Big Walrus a   <a id= 'SoloEnNegrita'> unique collection </a>. 
            The liquidity of the collection is very limited, for the work and the time that it takes to carry out each one of them.<br />
            Anyway, when you buy a Big Walrus you are not only paying for the art of the drawing, but doubles as your  <a id= 'SoloEnNegrita'> Big Walrus membership card </a>, 
            and grants access to <a id= 'SoloEnNegrita'> members-only benefits </a> , which are described in the <a id= 'SoloEnNegrita' href='#second-section'> Road Map </a>. <br />
            Future areas and perks can be <a id= 'SoloEnNegrita'> unlocked by the community </a> through <a id= 'SoloEnNegrita' href='#second-section'> Road Map </a> activation.<br />
            </p>
          </div>
        </div>
        <div className='separator'/>
        <div className='flex' id='second-section'>
          <h1>ROAD MAP</h1>
          
          <div id='roadmap'>
            <img src={require('./assets/roadmap.png')} alt='roadmap'/>
          </div>
           <h2>THE BIG</h2>
            <h2 id='walrus'>WALRUS</h2>

            <p id='ProgetDefinition'> 
            <a id= 'SoloEnNegrita'>The Big Walrus (TBW)</a> is a collection of Non-Fungible Tokens living on Solana blockchain, punlish on OpenSea. <br />
            NFTs are <a id= 'SoloEnNegrita'> immutable and forever </a>. We only have one chance to do it right, so we obsess over  <a id= 'SoloEnNegrita'> quality </a> and review all  <a id= 'SoloEnNegrita'> details </a>.
            That's why we decided to make each Big Walrus NFT by hand in a completely  <a id= 'SoloEnNegrita'> handmade </a> way , making The Big Walrus a   <a id= 'SoloEnNegrita'> unique collection </a>. 
            The liquidity of the collection is very limited, for the work and the time that it takes to carry out each one of them.<br />
            Anyway, when you buy a Big Walrus you are not only paying for the art of the drawing, but doubles as your  <a id= 'SoloEnNegrita'> Big Walrus membership card </a>, 
            and grants access to <a id= 'SoloEnNegrita'> members-only benefits </a> , which are described in the <a id= 'SoloEnNegrita' href='#second-section'> Road Map </a>. <br />
            Future areas and perks can be <a id= 'SoloEnNegrita'> unlocked by the community </a> through <a id= 'SoloEnNegrita' href='#second-section'> Road Map </a> activation.<br />
            </p>
            
          <div className='flex' id='images'>

            <img class='zoom' src={require('./assets/morsas/3.png')} alt='morsa'/>
            <img class='zoom' src={require('./assets/morsas/6.png')} alt='morsa'/>
            <img class='zoom' src={require('./assets/morsas/8.png')} alt='morsa'/>
            <img class='zoom' src={require('./assets/morsas/7.png')} alt='morsa'/>
            <img class='zoom' src={require('./assets/morsas/9.png')} alt='morsa'/>
            <img class='zoom' src={require('./assets/morsas/5.png')} alt='morsa'/>
          </div>
          <div id='below-images'>

            <h1>BUY A WALRUS</h1>
            <p> To get your Walrus, check out the collection on OpenSea</p>
            <a id='button-buy' href='https://opensea.io/collection/thebigwalerus-store/' target='_blank' rel="noreferrer" >BUY A WALRUS ON OPENSEA</a>
          </div>
        </div>
        <div id='third-section'>
          <h1>FAQ</h1>
          <ul id='FAQ'>
            <li><details>
              <summary>
                When is the mint date?
                <Icons.KeyboardArrowDown />
              </summary>
              <p>The exact date is still under discussion but it will be in the month of April</p>
            </details></li>
            <li><details>
              <summary>
                 What will the price be?
                <Icons.KeyboardArrowDown />
              </summary>
              <p>Te minting price is 0.3 SOL. The Big Walrus collection will be published on the @openSea page, on the Solana network. </p>
            </details></li>
            <li><details>
              <summary>
                How do I get whitelisted? When will the pre-sale be?
                <Icons.KeyboardArrowDown />
              </summary>
              <p> We are not doing pre-sales or whitelisting. Everyone will get the same fair chance to mint a Big Walrus on mint day. </p>
            </details></li>
            <li><details>
              <summary>
               How many Big Walruses will be available?
                <Icons.KeyboardArrowDown />
              </summary>
              <p>The initial amount of walruses published in open sea will be 25 walruses, to see more information check the Road Map </p>
            </details></li>
            <li><details>
              <summary>
                Who is the team behind it?
                <Icons.KeyboardArrowDown />
              </summary>
              <p>In summary, we are a group of experienced professional engineers who like to do things right. We hope to exceed all your expectations! (You can read more about it on the Team section, right below).</p>
            </details></li>
          </ul>
        </div>
        <div id='fourth-section' className='flex'>
          <div id='team-container'>
            <h1>THE TEAM</h1>
            <p> Made up of 4 old friends who met in college, TBW team is made up of people with a clear objective and an achievable goal.</p>
            <ul id='team'>
              <li><h4>DOCTOR GRANT: </h4>  Loves dinosaurs but 's a bit dyslexic</li>
              <li><h4>STEVEN:</h4>  Addicted to the series but draws well</li>
              <li><h4>FIELD GARMET:</h4> Drinks "mate" all day, but 's smart.</li>
              <li><h4>EDWARD TEACH:</h4> Loves to be in the tavern with the walruses</li>
            </ul>
          </div>
          <div id='team-images' className='flex'>
            <img src={require('./assets/Francisco.png')} alt='morsa'/>
            <img src={require('./assets/Giuli.png')} alt='morsa'/>
            <img src={require('./assets/Camila.png')} alt='morsa'/>
            <img src={require('./assets/Santiag.png')} alt='morsa'/>
          </div>
        </div>
        <div className='separator'/>
        <Footer />
      </motion.div>
  )
}

export default Bar