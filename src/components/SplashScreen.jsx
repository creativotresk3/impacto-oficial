import { useEffect } from "react";
import logo from "../images/logos/logo-impacto.png";
import "../styles/splash.css";

function SplashScreen() {

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Entrar a la aplicación");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-screen">

      <div className="red-light"></div>
      <div className="blue-light"></div>

      <img
        src={logo}
        alt="Logo Impacto"
        className="logo"
      />

    </div>
  );
}

export default SplashScreen;