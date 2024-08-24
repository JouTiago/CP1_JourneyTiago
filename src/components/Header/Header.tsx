import logo from '../../images/rato.png';
import menu_b from '../../images/fi-br-menu-burger.png';
import lupa from '../../images/Vector.png';
import './header.css';

function Header() {
  return (
    <header className="header-container">
      <div className='header-elem-container'>

        <div className="header-esq">
          <img src={logo} alt="Ratings Logo" className="logo" />
          <nav>
            <button className="menu-button">
              <img src={menu_b} alt="Barra Menu" className="menu-icon" />
              MENU
            </button>
          </nav>
        </div>

        <div className="header-dir">
          <div className="cx-pesquisa">
            <img src={lupa} alt="Lupa" className="pesquisa-icon" />
            <span className="pesquisa-text0">Search</span>
          </div>
          <div>
            <button className="login-button">
              LOGIN
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;