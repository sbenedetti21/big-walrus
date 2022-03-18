import Footer from './Footer';
import './Home.css';
import './index.css'
import NavButtons from "./NavButtons";
import * as Icons from "@material-ui/icons";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";

function Home() {

  return (
    <motion.div
        initial={{opacity: 0, y: "-2%"}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 0}}

        className="common-container flex">
      <nav id='home-nav' className='flex'>
        <div className='flex'>
          <img src={require('./assets/LogoBlanco.png')} alt='logo' id='home-logo'/>
          <div className='flex home-title hover'>
            <h1 id='thebig'>THE BIG</h1>
            <h1 id='walrus'>WALRUS</h1>
          </div>
        </div>
      </nav>
      <div className='buttons flex'>
        <NavButtons />
      </div>
      <div id='banner-container'>
        <img src={require('./assets/WalrusBar-home.jpg')} alt='banner'/>
      </div>
      <div id='enter-bar'>
        <h1>WELCOME TO THE BIG WALRUS</h1>
        <NavLink id='enter' to={'/bar'}>ENTER <Icons.ArrowForward /></NavLink>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Home;
