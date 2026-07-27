import logo from "../images/logos/logo-impacto.png";
import "../styles/navbar.css";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="navbar">

    <button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  ☰
</button>

      <img
        src={logo}
        alt="Impacto"
        className="navbar-logo"
      />

      <button className="notification-btn">
        🔔
      </button>

    </header>
  );
}

export default Navbar;