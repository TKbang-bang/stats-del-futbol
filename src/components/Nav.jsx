import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav({ res }) {
  return (
    <nav className={res ? "" : "navi"}>
      <Link to="/">Inicio</Link>
      <Link to="/historia">Historia</Link>
      <Link to="/about">Sobre la página</Link>
      <Link to="/contact">Contactos</Link>
    </nav>
  );
}

export default Nav;
