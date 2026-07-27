import "../styles/hero-effects.css";

import lightRays from "../images/effects/light-rays.png";
import lensFlare from "../images/effects/lens-flare.png";

function HeroEffects() {
  return (
    <>
      {/* Rayos de luz */}
      <img
        src={lightRays}
        alt=""
        className="effect-light-rays"
        aria-hidden="true"
      />

      {/* Destello principal */}
      <img
        src={lensFlare}
        alt=""
        className="effect-lens-flare"
        aria-hidden="true"
      />

      {/* Partículas */}
      <div className="particles"></div>
    </>
  );
}

export default HeroEffects;