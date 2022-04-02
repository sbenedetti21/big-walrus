import './index.css';
import NavButtons from "./NavButtons";
import './Footer.css'


function Footer() {
  return(
      <footer className='flex'>
        <div>
          <h2>Join the developer list</h2>
          <p id='sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus metus eu in eleifend. Tincidunt varius ultricies consequat aliquam consequat in dolor maecenas.</p>
        </div>
        <div id='logos'>
        <a href='https://opensea.io/collection/thebigwalerus-store/'  target='_blank' rel="noreferrer">
          <img src={require('./assets/LogoBlanco.png')}  width="40" height="31" />
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