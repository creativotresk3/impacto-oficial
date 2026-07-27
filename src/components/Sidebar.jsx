import "../styles/sidebar.css";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaTrophy,
  FaGraduationCap,
  FaCalendarAlt,
  FaVideo,
  FaImages,
  FaNewspaper,
  FaHandshake,
  FaImage,
  FaShareAlt,
  FaInfoCircle
} from "react-icons/fa";

function Sidebar({ menuOpen }) {
  return (
    <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
      <h2>IMPACTO</h2>

      <nav>
        <Link to="/">
          <FaHome /> Inicio
        </Link>

        <Link to="/luchadores">
          <FaUsers /> Luchadores
        </Link>

        <Link to="/campeones">
          <FaTrophy /> Campeones
        </Link>

        <Link to="/escuela">
          <FaGraduationCap /> Escuela
        </Link>

        <Link to="/eventos">
          <FaCalendarAlt /> Eventos
        </Link>

        <Link to="/videos">
          <FaVideo /> Videos
        </Link>

        <Link to="/galeria">
          <FaImages /> Galería
        </Link>

        <Link to="/noticias">
          <FaNewspaper /> Noticias
        </Link>

        <Link to="/patrocinadores">
          <FaHandshake /> Patrocinadores
        </Link>

        <Link to="/wallpapers">
          <FaImage /> Wallpapers HD
        </Link>

        <Link to="/redes">
          <FaShareAlt /> Redes Sociales
        </Link>

        <Link to="/acerca">
          <FaInfoCircle /> Acerca de
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;