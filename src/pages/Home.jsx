import "../styles/home.css";
import Hero from "../components/Hero";
import {
  FaCalendarAlt,
  FaUsers,
  FaTrophy,
  FaNewspaper,
  FaPlayCircle,
  FaStore,
} from "react-icons/fa";

export default function Home() {
  const menu = [
    { icon: <FaCalendarAlt />, title: "EVENTOS" },
    { icon: <FaUsers />, title: "LUCHADORES" },
    { icon: <FaTrophy />, title: "CAMPEONES" },
    { icon: <FaNewspaper />, title: "NOTICIAS" },
    { icon: <FaPlayCircle />, title: "VIDEOS" },
    { icon: <FaStore />, title: "TIENDA" },
  ];

  return (
    <div className="home">
      <Hero />

      <section className="quickMenu">
        {menu.map((item, index) => (
          <div className="quickCard" key={index}>
            <div className="quickIcon">{item.icon}</div>
            <span>{item.title}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="title">
  ALUMNOS DESTACADOS DEL MES
</div>

        <div className="horizontalCards">
          <div className="card">Próximamente</div>
          <div className="card">Próximamente</div>
          <div className="card">Próximamente</div>
        </div>
      </section>

      <section className="section">
        <div className="title">CAMPEONES</div>

        <div className="horizontalCards">
          <div className="card">Campeón Absoluto</div>
          <div className="card">Campeona Femenil</div>
        </div>
      </section>

      <section className="section">
        <div className="title">NOTICIAS</div>

        <div className="newsCard">
          Próximamente aparecerán las noticias oficiales.
        </div>
      </section>

      <section className="section">
        <div className="title">PATROCINADORES</div>

        <div className="sponsors">
          <div className="sponsor">PATROCINADOR 1</div>
          <div className="sponsor">PATROCINADOR 2</div>
          <div className="sponsor">PATROCINADOR 3</div>
          <div className="sponsor">PATROCINADOR 4</div>
          <div className="sponsor">PATROCINADOR 5</div>
          <div className="sponsor">PATROCINADOR 6</div>
          <div className="sponsor">PATROCINADOR 7</div>
          <div className="sponsor">PATROCINADOR 8</div>
        </div>
      </section>
    </div>
  );
}