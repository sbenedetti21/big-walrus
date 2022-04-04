import './index.css';
import './NavBar.css';
import NavButtons from "./NavButtons";
import {NavLink} from "react-router-dom";
import * as Icons from "@material-ui/icons";

function NavBar() {
    return(
        <nav className='bar-nav' >

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
           <li><a href='#home'>HOME</a></li>
           <li><a href='#second-section'>ROAD MAP</a></li>
           <li><a href='#galeria'>MINI GALLERY</a></li>
           <li><a href='#third-section'>FAQ</a></li>
           <li><a href='#team-container'>ABOUT US</a></li>
           <li><div><a href='https://opensea.io/collection/thebigwalerus-store/' target='_blank' rel="noreferrer"><f >BUY A WALRUS</f></a></div></li>
         </ul>

           <div className='nav-lines'>
             <Icons.Menu/>
           </div>

         <div className='nav-buttons'  >
           <NavButtons />
         </div>

       </nav>
    )
  }
  
  export default NavBar;