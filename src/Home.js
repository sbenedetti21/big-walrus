import Footer from './Footer';
import './Home.css';
import NavButtons from "./NavButtons";

function Home() {
  return (
    <div className="common-container">
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
      <Footer />
    </div>
  );
}

export default Home;
