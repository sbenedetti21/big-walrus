import './Home.css';
import * as Icons from '@material-ui/icons';

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
        <a href='https://instagram.com' target='_blank' rel="noreferrer" className='hover'><Icons.Instagram/></a>
        <a href='https://twitter.com' target='_blank' rel="noreferrer" className='hover'><Icons.Twitter/></a>
        <a href='https://solsea.io' target='_blank' rel="noreferrer" className='hover'><Icons.ShoppingCart/></a>
      </div>
      <div id='banner-container'>
        <img src={require('./assets/WalrusBar-home.jpg')}/>
      </div>
    </div>
  );
}

export default Home;
