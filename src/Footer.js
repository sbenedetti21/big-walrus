import './index.css';
import NavButtons from "./NavButtons";
import './Footer.css'


function Footer() {
  return(
      <footer className='flex'>
        <div id='logos'>
        <a href='https://opensea.io/collection/thebigwalerus-store/'  target='_blank' rel="noreferrer">
          <img src={require('./assets/TheBigWalrus.png')}  />
        </a>
        <a href='https://solana.com/ecosystem/'  target='_blank' rel="noreferrer">
          <img src={require('./assets/Solana.png')}  />
        </a>
        <a  href='https://opensea.io/' target='_blank' rel="noreferrer">
          <img src={require('./assets/OpenSea.png')}/>
        </a>
        </div>
        <div>
          <div className='footer-buttons flex'>
            <NavButtons />
          </div>
          <p id='rights'>@2021 TBW.TheBigWalrus<br/>All Rights Reserved.</p>
        </div>
      </footer>
  )
}

export default Footer;