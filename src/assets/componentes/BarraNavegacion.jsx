import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Navegacion() {
  return (
    <div>
      <nav className="fixed">
        <ul>
          <li>
            <h3>Laura Fernández</h3>
          </li>
          <li>
            <a href="https://www.instagram.com/laurafg0312/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink to="/habilidades" activeClassName="active">
              Habilidades
            </NavLink>
          </li>
          <li>
            <NavLink to="/proyectos" activeClassName="active">
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink to="/ignore" activeClassName="active">
              Git Ignore
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navegacion;
