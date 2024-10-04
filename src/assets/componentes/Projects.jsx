import React from "react";
import imgHtml from "../img/html.jpg";
import imgResponsive from "../img/responsive.jpg";
import imgFormulario from "../img/formulario.png";
import imgTelescopio from "../img/Telescopio.png";
import imgJS from "../img/JS.jpg";
import imgNum from "../img/numeros.jpg";
import imgContador from "../img/contador.png";
import imgSnoopy from "../img/snoopy.jpg";

function Projects() {
  return (
    <div className="proyectos">
      <h1>Proyectos</h1>
      <div className="links">
        <a href="https://github.com/Lalaf03/Clase2_web.git">
          <div className="proyecto">
            <img src={imgHtml} alt="web" class="icon"></img>
            <h2>Principios HTML</h2>
          </div>
        </a>

        <a href="https://github.com/Lalaf03/Caracteristicas-CSS.git">
          <div className="proyecto">
            <img src={imgResponsive} alt="responsive" class="icon"></img>
            <h2>Responsive</h2>
          </div>
        </a>

        <a href="https://github.com/edwinmgallego/clase-practica-css-jueves/tree/devLau">
          <div className="proyecto">
            <img src={imgFormulario} alt="Formulario" class="icon"></img>
            <h2>Formulario</h2>
          </div>
        </a>

        <a href="https://drive.google.com/file/d/1CVSP_uT73Sps6Q9onH9PzMvKy3NBmzfs/view?usp=sharing">
          <div className="proyecto">
            <img src={imgTelescopio} alt="telescopio" class="icon"></img>
            <h2>Telescopio 3D</h2>
          </div>
        </a>

        <a href="https://github.com/Lalaf03/basico-JavaScript.git">
          <div className="proyecto">
            <img src={imgJS} alt="telescopio" class="icon"></img>
            <h2>Práctica JavaScript</h2>
          </div>
        </a>

        <a href="https://github.com/Lalaf03/Semana8.git">
          <div className="proyecto">
            <img src={imgNum} alt="telescopio" class="icon"></img>
            <h2>Número menor</h2>
          </div>
        </a>

        <a href="https://github.com/Lalaf03/Primer-Proyecto-React.git">
          <div className="proyecto">
            <img src={imgContador} alt="telescopio" class="icon"></img>
            <h2>Contador</h2>
          </div>
        </a>

        <a href="https://github.com/Lalaf03/Semana10.git">
          <div className="proyecto">
            <img src={imgSnoopy} alt="telescopio" class="icon"></img>
            <h2>Cards-React</h2>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
