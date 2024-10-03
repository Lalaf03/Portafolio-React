import React from "react";
import perfilImg from "../img/Perfil.jpg";

function SobreMi() {
  return (
    <div className="descripcion" id="SobreMi">
      <div className="imagen">
        <img src={perfilImg} alt="Foto Lau"></img>
      </div>
      <div className="titulo">
        <h1>Hola, soy Laura Fernández </h1>
      </div>
      <div className="parrafo">
        <p>
          Soy estudiante de la carrera de Ingeniería Multimedia en la
          Universidad Autónoma de Occidente, apasionada por la creación y el
          diseño digital. A lo largo de mi carrera, he participado en diversos
          proyectos que abarcan desde el desarrollo de videojuegos y páginas
          web, hasta el diseño de videos, imágenes, y la edición de audio. Estoy
          comprometida con el aprendizaje continuo y la aplicaci+on creativa de
          la tecnología para resolver problemas y crear experiencias virtuales.
        </p>
      </div>
    </div>
  );
}

export default SobreMi;
