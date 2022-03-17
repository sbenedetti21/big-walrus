import Footer from './Footer';
import './Home.css';
import NavButtons from "./NavButtons";
import * as Icons from "@material-ui/icons";

function Home() {

  const handleClick = () => {
    window.location.href = '/#/bar'
  }

  return (
    <div className="common-container flex">
      <nav id='home-nav' className='flex'>
        <div className='flex'>
          <img src={require('./assets/LogoBlanco.png')} alt='logo' id='home-logo'/>
          <div className='flex home-title hover'>
            <h1 id='thebig'>THE BIG</h1>
            <h1 id='walrus'>WALRUS</h1>
          </div>
        </div>
      </nav>
      <div className='nav-buttons flex'>
        <NavButtons />
      </div>
      <div id='banner-container'>
        <img src={require('./assets/WalrusBar-home.jpg')}/>
      </div>
      <div id='enter-bar'>
        <h1>WELCOME TO THE BIG WALRUS</h1>
        <button id='enter' onClick={handleClick}>ENTER <Icons.ArrowForward /></button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
