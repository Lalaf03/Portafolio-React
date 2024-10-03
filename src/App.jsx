/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/
import React from "react";
import "./Styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
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

        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
