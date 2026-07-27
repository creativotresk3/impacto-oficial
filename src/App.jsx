import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Luchadores from "./pages/Luchadores";
import Campeones from "./pages/Campeones";
import Escuela from "./pages/Escuela";
import Eventos from "./pages/Eventos";
import Videos from "./pages/Videos";
import Galeria from "./pages/Galeria";
import Noticias from "./pages/Noticias";
import Patrocinadores from "./pages/Patrocinadores";
import WallpapersHD from "./pages/WallpapersHD";
import Redes from "./pages/Redes";
import Contacto from "./pages/Contacto";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Sidebar menuOpen={menuOpen} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/luchadores" element={<Luchadores />} />
        <Route path="/campeones" element={<Campeones />} />
        <Route path="/escuela" element={<Escuela />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/patrocinadores" element={<Patrocinadores />} />
        <Route path="/wallpapers" element={<WallpapersHD />} />
        <Route path="/redes" element={<Redes />} />
        <Route path="/acerca" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;