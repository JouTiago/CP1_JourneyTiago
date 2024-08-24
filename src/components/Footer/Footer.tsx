import logo from '../../images/rato.png';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-elem-container'>
        <div className='footer-espacamento'>

          <img src={logo} alt="Ratings Logo Footer" className="footer-logo" />

          <div className='footer-texto-container'>
            <div className='footer-texto-titulo'>COMPANY
              <div className='footer-texto'>About us</div>
              <div className='footer-texto'>Partnerships</div>
              <div className='footer-texto'>FAQ</div>                      
            </div>

            <div className='footer-texto-titulo'>COMPANY
              <div className='footer-texto'>About us</div>
              <div className='footer-texto'>Partnerships</div>
              <div className='footer-texto'>FAQ</div>                      
            </div>

            <div className='footer-texto-titulo'>COMPANY
              <div className='footer-texto'>About us</div>
              <div className='footer-texto'>Partnerships</div>
              <div className='footer-texto'>FAQ</div>                      
            </div>

         
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
