import "./../styles/header.css";
import logo from "../images/logos/logo-impacto.png";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="header">

      <div className="header-glow-red"></div>
      <div className="header-glow-blue"></div>

      <button
        className="header-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className="header-logo">
        <img src={logo} alt="Impacto Oficial" />
      </div>

      <div className="header-right">

        <button className="header-notification">
          🔔
        </button>

        <div className="header-avatar">
          👤
        </div>

      </div>

    </header>
  );
}

export default Header;