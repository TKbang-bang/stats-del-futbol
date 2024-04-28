import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="dos">
        <h3>Vía rápida</h3>
        <div>
          <Link to="/">Inicio</Link>
          <Link to="/historia">Historia</Link>
          <Link to="/about">Sobre la página</Link>
          <Link to="/contact">Contactos</Link>
        </div>
      </div>
      <div className="uno">
        <p>
          Página web creada por <span className="name">Woodley TK</span>
        </p>
        <p>Creado en: abril 2024</p>
        <p>Ultima actualización: </p>
      </div>
    </footer>
  );
}

export default Footer;
