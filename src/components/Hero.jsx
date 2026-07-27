import "./../styles/hero.css";
import HeroEffects from "./HeroEffects";
import logoImpacto from "../images/logos/logo-impacto.png";

function Hero() {
  return (
    <section className="hero">

      <HeroEffects />

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <img
          src={logoImpacto}
          alt="Impacto Oficial"
          className="hero-logo"
        />

        <p className="hero-description">
          Integración Mexicana Profesional de Alto Combate y Talento Organizado.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary">
            📅 Próximo Evento
          </button>

          <button className="btn-secondary">
            😊 Stickers
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;