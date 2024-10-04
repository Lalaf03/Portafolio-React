import React from "react";
import "./Styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import SobreMi from "./assets/componentes/SobreMi";
import Habilidades from "./assets/componentes/Habilidades";
import Projects from "./assets/componentes/Projects";
import Ignore from "./assets/componentes/Ignore";
import Navegacion from "./assets/componentes/BarraNavegacion";

function App() {
  return (
    <Router>
      <Navegacion />
      <div>
        <main>
          <Routes>
            <Route path="/" element={<SobreMi />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/ignore" element={<Ignore />} />
          </Routes>
        </main>

        <footer>
          <p>Desarrollo de Experiencias Multimedia para la Web</p>
          <p>Parcial 2 Laura Fernández Gómez</p>
          <p>laura.fernandez_gom@uao.edu.co</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
