import './index.css';
import NavButtons from "./NavButtons";

function Footer() {
  return(
      <footer className='flex'>
        <div>
          <h2>Join the developer list</h2>
          <p id='sub'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus metus eu in eleifend. Tincidunt varius ultricies consequat aliquam consequat in dolor maecenas.</p>
        </div>
        <div>
          <div className='footer-buttons flex'>
            <NavButtons />
          </div>
          <p id='rights'>2022 TheBigWalrus<br/>Todos los derechos reservados</p>
        </div>
      </footer>
  )
}

export default Footer;